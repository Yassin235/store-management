import { useState } from "react";
import "./section.css"
function Section(){
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const [info, setInfo] = useState([]);
    const [inform, setInform] = useState([]);
    const [fullName, setFullName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [orderName, setOrderName] = useState();
    const [price, setPrice] = useState();
    const date = year + " - " + month + " - " + day;
    const [showForm, setShowForm] = useState(false);
    const totalPrice = info.reduce((num, nextNum) => num + Number(nextNum.price), 0);
    function addInformation(e){
        e.preventDefault();
        setShowForm(false);
        const newInfo = {fullName: fullName, phoneNumber: phoneNumber, orderName: orderName, price: price, date: date};
        setInfo(i =>[...i, newInfo]);
        setInform(i =>[...i, newInfo]);
        setFullName("");
        setPhoneNumber("");
        setOrderName("");
        setPrice("");
    }
    function deleteTd(index){
        const newData = info.filter((_,i) => i !== index);
        setInfo(newData);
        const inform = info.filter((_,i) => i !== index);
        setInform(newData);
    }
    function changeFullName(event){
        setFullName(event.target.value);
    }
    function changePhoneNumber(event){
        setPhoneNumber(event.target.value);
    }
    function changeOrderName(event){
        setOrderName(event.target.value);
    }
    function changePrice(event){
        setPrice(event.target.value);
    }
    function filterData(e){
    const value = e.target.value.toLowerCase();

    if(value === ""){
        setInfo(inform);
        return;
    }

    const serInfo = inform.filter((inf) =>
        inf.fullName?.toLowerCase().includes(value)
    );

    setInfo(serInfo);
}
    return(
        <div className="content">
            {showForm && (
                <div className="show-hide-form">
                <form id="new-order-form">
                    <h1>Add a new order</h1>
                    <button className="delete" onClick={() => setShowForm(false)} >X</button>
                    <div className="tuis">
                        <input type="text" value={fullName} id="Full-name" placeholder="Enter your full name" onChange={changeFullName}/>
                        <input type="number" value={phoneNumber} id="Phone-number" datatype="number" placeholder="--- --- ---" onChange={changePhoneNumber}/>
                    </div>
                    <input type="text" value={orderName} id="Order-name" placeholder="Enter order name" onChange={changeOrderName}/>
                    <input type="number" value={price} id="price" datatype="number" placeholder="Enter the price" onChange={changePrice}/>
                    <div className="btn">
                        <button onClick={addInformation} id="save">send</button>
                        <button onClick={() => setShowForm(false)} id="cancel">cancel</button>
                    </div>
                </form>
            </div>
            )}
            <div className="informations">
                <div className="totalRevenue"><span className="totalPrice">TOTAL REVENUE</span> <span className="totalPriceNum"> {totalPrice}  DA</span></div>
                <div className="order-number"><span className="order-header">ORDER NUMBER</span> <span className="order-header-num">{info.length} ORDERS</span></div>
                <div className="add">
                    <button onClick={() => setShowForm(true)} className="plus">+</button>
                    <h1>Create New Entry</h1>
                    <p>Expedite your workflow</p>
                </div>
            </div>
            <div className="add-disp-info">
                <div className="disp-info">
                    <div className="tab-head">
                        <h1>Order diractory</h1>
                        <input type="text" placeholder="serch" onChange={filterData}/>
                    </div>
                    <table className="tab">
                        <th>full name</th>
                        <th>phone</th>
                        <th>order name</th>
                        <th>price</th>
                        <th>date</th>
                        <th>delete</th>
                        {
                            info.map((i, index) => {
                                return(<tr key={index}>
                                    <td className="i-fullName">{i.fullName}</td>
                                    <td>{i.phoneNumber}</td>
                                    <td className="i-orderName">{i.orderName}</td>
                                    <td className="i-price">{i.price} DA</td>
                                    <td>{i.date}</td>
                                    <td><button className="delete" onClick={() => deleteTd(index)}>X</button></td>
                                </tr>);
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Section