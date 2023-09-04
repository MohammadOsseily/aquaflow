
import Productcard from "../components/ProductCard"
function Page(){
    return(
        <div className={` mx-auto`} style={{width: "65%"}}>
            <div className={`row`}>
                <Productcard className={`col `}/>

            </div>

        </div>
    )
}
export default Page;