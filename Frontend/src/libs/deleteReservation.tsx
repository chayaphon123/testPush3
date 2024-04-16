export default async function deleteReservation(id:string,token:string) {
    const response = await fetch(`http://projectreservationjack.us-east-1.elasticbeanstalk.com/api/v1/reservations/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
    }})
        
    if(!response.ok){
        throw new Error("Failed to getReservation")
    }
    return await response.json()

}