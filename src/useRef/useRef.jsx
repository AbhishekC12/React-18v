
import axios from "axios"
import { useEffect, useRef, useState } from "react"

export function SetTimeoutDemo()
{

    const [product, setProduct] = useState({});
    const [status, setStatus] = useState('Manual');
    let ProductId = useRef(1);
    let timeInterval = useRef(null);

    function LoadProduct(id){
        axios.get(`http://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    function LoadProductAuto(){
        ProductId.current = ProductId.current + 1;
        axios.get(`http://fakestoreapi.com/products/${ProductId.current}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    function NextClick(){
        ProductId.current = ProductId.current + 1;
        LoadProduct(ProductId.current);
    }
    function PreviousClick(){
        ProductId.current = ProductId.current - 1;
        LoadProduct(ProductId.current);
    }

    function PlayClick(){
        timeInterval.current = setInterval(LoadProductAuto, 5000);
        setStatus('Slide Show - Started');
    }

    function PauseClick(){
        clearInterval(timeInterval.current);
        setStatus('Slide Show - Paused');
    }


    useEffect(()=>{
        LoadProduct(1);
    },[]);
 
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card p-2 mt-4 w-50">
                <div className="card-header text-center">
                    <div>{product.title}</div>
                    <div> <b>{status}</b>  </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1">
                            <button onClick={PreviousClick} className="bi bi-chevron-left btn"></button>
                        </div>
                        <div className="col-10">
                        <img width="100%" src={product.image} height="400" />
                        </div>
                        <div className="col-1">
                        <button onClick={NextClick} className="bi bi-chevron-right btn"></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={PlayClick} className="btn btn-danger me-2 bi bi-play"></button>
                    <button onClick={PauseClick} className="btn btn-warning bi bi-pause"></button>
                </div>
            </div>
        </div>
    )
}
