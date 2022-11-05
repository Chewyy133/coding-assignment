import { useState } from "react";

export function ReviewForm() {
    const [review, setReview] = useState('');

//this will display review as you're typing it but wasn't able to figure out how to submit it to a table
    return (
    <div>
        <form>
            <label>Leave A Review!</label><br/>
            <textarea   
            required
            value={review}
            onChange={(e) => setReview (e.target.value)}
            ></textarea><br/>
            <button>Submit</button><br/>
            <p>{ review }</p>
        </form>
    </div>
    );
}

export default ReviewForm;