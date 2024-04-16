import getCars from "@/libs/getCars"
import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { RestaurantJson } from "../../../../interfaces"

export default async function Car() {

    const cars:RestaurantJson = await getCars()

    return (
        <main className="text-center p-5 ">
            <h1 className="text-5xl font-medium p-10">Select Your Restaurants</h1>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
            <CarCatalog carJson={cars}/>
            </Suspense>
        </main>
    )
}