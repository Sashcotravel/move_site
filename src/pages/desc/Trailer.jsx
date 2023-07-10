import React from 'react';
import s from "./Desc.module.css";

function Trailer() {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU"
                 alt="photo" className={s.imgDesc} />
            <p className={s.pT}>Трейлер</p>
            <p className={s.pTime}> 0:02:03</p>
        </div>
    );
}

export default Trailer;