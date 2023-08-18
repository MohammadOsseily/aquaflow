import 'bootstrap/dist/css/bootstrap.css';
function navBar(){
    return(
        <>

                <div className ="d-flex justify-content-between">
                    <div className="d-flex">Logo</div>



                    <div className="d-flex">
                        <div className="p-4">Products</div>
                        <div className="p-4">About</div>
                        <div className="p-4">App</div>
                    </div>

                    <div className="d-flex">
                        <div className="p-4">login</div>
                        <div className="p-4">register</div>
                    </div>

                </div>


        </>

)
}


export default navBar;