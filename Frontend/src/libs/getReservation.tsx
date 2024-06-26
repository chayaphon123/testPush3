export default async function getReservation(token:string) {
    const response = await fetch("http://projectreservationjack.us-east-1.elasticbeanstalk.com/api/v1/reservations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
    }})
        
    if(!response.ok){
        throw new Error("Failed to Reservation")
    }
    return await response.json()

}