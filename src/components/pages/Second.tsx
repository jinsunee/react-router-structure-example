import React, { useState } from 'react';

import { Prompt } from 'react-router-dom';

const Second = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const hasUserEnteredData = firstName !== '' || lastName !== '';

    return (
        <div>
            <Prompt when={hasUserEnteredData} message="Data will be lost" />
            <h1>Second Page</h1>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <label>
                    First Name:
                    <input
                        type="text"
                        name="name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <button type="submit" style={{ width: '200px' }} disabled={true}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Second;