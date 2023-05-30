import React from 'react'

import cardlogo from "../../Imgs/secondaryImgs/hizmatlarcard.png"

export default function Xizmatlar() {
    return (
        <>
            <div className="hizmatlar_ota">
                <div className="hizmatlar_top">
                    <h1>Bizning xizmatlar</h1>
                </div>
                <div className="hizmatlar_cards">
                    <div className="hizmatlar_card">
                        <div className="hizmatlar_card_top">
                            <h3>Mahalliy yuk tashish
                                xizmatlari</h3>
                            <img src={cardlogo} alt="cardlogo" />
                        </div>
                        <div className="hizmatlar_card_text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
