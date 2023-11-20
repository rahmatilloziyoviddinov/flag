import "./Main.css"
import React, { useState } from 'react'
import { fake_data } from "../../Static_data"


function Main({ setRight, right, data, ans, setAns, setCount, count, setWrong, wrong }) {
    
    console.log(ans)

    const FormFunction = (e) => {
        e.preventDefault()

        if (ans === "") {
            alert("joylarni to'ldiring")
        } else {
            console.log(ans == data.answer)
            if (ans != data.answer) {
                setWrong(wrong + 1)

            } else {
                setRight(right + 1)
            }
            if (wrong === 3) {
                alert("siz yiqildingiz")
            } else {
                setCount(count + 1)
            }
        }
        setAns("")
        
    }

    return (
        <div className='main'>
            <form onSubmit={FormFunction} className="card">
                <span className="number">{data.id}</span>
                <div className="left">
                    <img src={data.flag} alt="" />
                </div>
                <div className="right" onChange={e => setAns(e.target.value)}>
                    <h1 className="title">Ushbu bayroq qaysi davlatga tegishli ?</h1>
                    {data.options.map((el, inx) => (
                        <li>
                            <input defaultChecked={false} type="radio" value={el} name="amount" />
                            <label for={el}>{el}</label>
                        </li>
                    ))}
                </div>

                <button>Jo'natish</button>
            </form>
        </div >
    )
}

export default Main