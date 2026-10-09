const bookings = [
    {customer_id:102,
    customer_name:'John',
    customer_phno:'9999999999',
    booking_id:1002,
    booking_date:'01-05-2023',
    booking_slot:'NA'}
]
export const readAllBookings =(req,res)=>{
    res.json(bookings);
}

export const createBooking =(req,res)=>{
    const b1 = req.body;
    bookings.push(b1);
    res.json(b1);
}