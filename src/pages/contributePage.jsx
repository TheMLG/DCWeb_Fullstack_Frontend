import React from 'react';
import '../style/contributepage.css';
import ContributeForm from '../components/forms/contributeForm';

class ContributePage extends React.Component {
    render() {
        return (
            <>
                <section className="submission-form-section">
                    <h2>Submit Your Article or Idea</h2>
                </section>      
                <ContributeForm/>
            </>
        );
    }
}

export default ContributePage;