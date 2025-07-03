
import React, { useEffect, useState, useRef } from "react";
import "../style/magcard.css";

function Magcard() {
  const [magData, setmagData] = useState([]);
  const [likedMagIds, setLikedMagIds] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem("likedMagIds");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const cardsRef = useRef([]);

  // Filter magData based on searchQuery (case-insensitive) and sort based on sortOption
  const filteredMagData = magData
    .filter((mag) =>
      mag.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "mostLiked":
          return b.likes - a.likes;
        case "mostViewed":
          return b.views - a.views;
        default:
          return 0;
      }
    });

  useEffect(() => {
    const fetchMag = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mag`);
        if (!response.ok) {
          throw new Error("Failed to fetch magazine");
        }
        const data = await response.json();
        setmagData(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchMag();
  }, []);
  const handleCardClick = (url, id) => {
    // Open magazine in new tab
    window.open(url, '_blank');
    
    // Track the view
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mag/${id}/view`, { method: "POST" });
  };

  useEffect(() => {
    console.log("magData:", magData);
  }, [magData]);

  useEffect(() => {
    // Persist likedMagIds to localStorage
    localStorage.setItem("likedMagIds", JSON.stringify(likedMagIds));
  }, [likedMagIds]);

  const handleLikeIncrement = async (id) => {
    if (likedMagIds.includes(id)) {
      // Already liked, do nothing
      return;
    }
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mag/${id}/like`, {
      method: "POST",
    });
    if (response.ok) {
      const updatedMagazine = await response.json();
      setmagData((prevMagData) =>
        prevMagData.map((mag) =>
          mag._id === updatedMagazine._id ? updatedMagazine : mag
        )
      );
      setLikedMagIds((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [filteredMagData]);

  return (
    <>
      <div className="search-container" style={{ marginBottom: "1rem" }}>
        {/* <input
          type="text"
          placeholder="Search magazines by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search magazines"
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "0.5rem",
            }}
            /> */}
        <div className="container-input">
          <input
            type="text"
            placeholder="Search magazines by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search magazines"
            name="text"
            className="input"
          />
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="sortcontainer">
          <select
            id="sorter"
            aria-label="Sort magazines"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="mostLiked">Most liked</option>
            <option value="mostViewed">Most viewed</option>
          </select>
        </div>
      </div>
      <div className="magazines">
        {filteredMagData.length === 0 ? (
          <div
            className="no-magazines"
            style={{
              textAlign: "center",
              marginTop: "2rem",
              fontSize: "1.2rem",
              color: "#666",
            }}
          >
            No magazines found.
          </div>
        ) : (
          filteredMagData.map((magData, index) => (
            <div
              className="magcard"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <section
                onClick={() => handleCardClick(magData.pdfurl, magData._id)}
                className="frontpage"
                aria-label="Magazine cover image"
                style={{ backgroundImage: `url(${magData.imgurl})` }}
              ></section>
              <div className="title">{magData.title}</div>
              <div className="date">
                {new Date(magData.date).toLocaleDateString()}
              </div>
              <div className="datas" aria-label="Magazine statistics">
                <div className="views" aria-label="Number of views">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z" />
                    <path d="M8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="#fff" />
                  </svg>
                  <span className="count">{magData.views}</span>
                </div>
                <div className="likes" aria-label="Number of likes">
                  <div className="like-wrapper">
                    <input
                      className="check"
                      type="checkbox"
                      id={`like-toggle-${magData._id}`}
                      aria-label="Like this magazine"
                      checked={likedMagIds.includes(magData._id)}
                      onChange={() => handleLikeIncrement(magData._id)}
                      disabled={likedMagIds.includes(magData._id)}
                      title={
                        likedMagIds.includes(magData._id)
                          ? "You have already liked this magazine"
                          : "Like this magazine"
                      }
                    />
                    <label
                      className="container"
                      htmlFor={`like-toggle-${magData._id}`}
                    >
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon inactive"
                      >
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon active"
                      >
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
                      </svg>
                      <div className="checkmark"></div>
                      <span className="like-text">{magData.likes}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>          ))
        )}
      </div>
    </>
  );
}

export default Magcard;
