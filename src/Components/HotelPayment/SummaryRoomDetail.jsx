// SummaryRoomDetail.jsx
import React from 'react';
import useHotelStore from '../../stores/hotel-store';
import useBookingStore from '../../stores/booking-store';

function SummaryRoomDetail() {
    const selectedRoom = useHotelStore(state=>state.selectedRoom)
    const bookingData = useBookingStore(state=>state.bookingData)
    console.log(bookingData)

    return (
        <div className="p-6 bg-[#fef6e4] rounded-lg shadow-md space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="w-1/3 h-24 rounded-lg overflow-hidden">
                        <img src={selectedRoom.images[0]} alt={selectedRoom.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="text-sm space-y-1">
                        <h3 className="text-lg font-bold text-brown-700">{selectedRoom.name}</h3>
                        <p>{selectedRoom.type}</p>
                    </div>
                </div>

            <div className="flex justify-between items-center mt-6">
                <div className="text-center border border-orange-500 rounded-lg p-4 bg-white w-1/3">
                    <p className="font-medium">Check-In</p>
                    <p className='text-xs'>Wed, 25 Oct 2024</p>
                    <p>From 14:00</p>
                </div>
                <div className="text-orange-500 font-medium text-center">
                    <p>6 nights</p>
                    <div className="flex items-center space-x-0">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="w-28 h-0.5 bg-orange-500"></div>
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                </div>

                <div className="text-center border border-orange-500 rounded-lg p-4 bg-white w-1/3">
                    <p className="font-medium">Check-Out</p>
                    <p className='text-xs'>Thu, 31 Oct 2024</p>
                    <p>Before 12:00</p>
                </div>
            </div>

            <div className="flex justify-between mt-6 space-y-1">
                <div>
                    <p>Total Room Price</p>
                    <p>1 room(s), 1 night(s)</p>
                </div>
                <div>
                    <p className="text-lg font-bold text-gray-600 line-through">THB 1,186.67</p>
                    <p className="text-2xl font-bold text-orange-600">THB 890.00</p>
                </div>
            </div>

            <div className="mt-6 text-sm space-y-1">
                <p className='font-bold'>Contact Details</p>
                <p className='ml-5'>Name: {bookingData.firstName} {bookingData.lastName}</p>
                <p className='ml-5'>Tel: {bookingData.phone}</p>
                <p className='ml-5'>Email: {bookingData.email}</p>
            </div>
        </div>
    );
}

export default SummaryRoomDetail;
