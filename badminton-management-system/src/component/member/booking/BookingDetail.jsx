import "../../../css/BookingDetail.css"
function BookingDetail(prop){
    const info = prop.info;
    return(
        <div className="tag-container">
            <div className="booking-info">
                <div className="booking-info-title">Your Booking Confirmation</div>
                <div className="booking-info-content">
                    <p>Booking ID: <strong>#{info.bookingID}</strong></p>
                    <p>Status: <strong>{info.bookingStatus}</strong></p>
                    <p>Booking Date: <strong>{info.bookingDate}</strong></p>
                    <p><strong>Court1: {info.startTime} - {info.endTime}</strong></p>
                    <p>Total hour: <strong>{info.totalHour}</strong></p>
                    <p>Amount: <strong>${info.amount}</strong></p>
                    <p>Payment status <strong>{info.paymentStatus}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default BookingDetail