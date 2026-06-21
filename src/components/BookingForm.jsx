import { useState } from "react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        serviceType: "",
        pickupAddress: "",
        dropoffAddress: "",
        moveDate: "",
        notes: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        await fetch("/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        alert("Request Submitted");
    };

    return (
        <form className="booking-form" onSubmit={submitForm}>
            <h2>Book Service</h2>

            <input
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
            />

            <input name="phone" placeholder="Phone" onChange={handleChange} />

            <input name="email" placeholder="Email" onChange={handleChange} />

            <select name="serviceType" onChange={handleChange}>
                <option>Choose Service</option>
            </select>

            <input
                name="pickupAddress"
                placeholder="Pickup Address"
                onChange={handleChange}
            />

            <input
                name="dropoffAddress"
                placeholder="Drop Off Address"
                onChange={handleChange}
            />

            <input type="date" name="moveDate" onChange={handleChange} />

            <textarea
                name="notes"
                placeholder="Notes"
                onChange={handleChange}
            />

            <button type="submit">Submit Request</button>
        </form>
    );
}
