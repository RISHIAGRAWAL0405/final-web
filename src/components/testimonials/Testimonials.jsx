import "./testimonials.scss";

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "10th board",
            title: "New Look Central School-80%(CBSE)",
            img:
                "assets/school_logo.png",
            //icon: "assets/twitter.png",
            desc:
                "Participated in all cultural activities in childhood and secured soo many awards and cirtificates.",
        },
        {
            id: 2,
            name: "12th Board",
            title: "St. John's Senior Secondary-82.2%(CBSE)",
            img:
                "assets/12school_logo.png",
            icon: "assets/youtube.png",
            desc:
                "Did prepairation of JEE and scored 95.08 percentile.dd",
            featured: true,
        },
        {
            id: 3,
            name: "COLLEGE",
            title: "ITNU-6.6",
            img:
                "assets/Nirma_University_Logo.png",
            icon: "assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>EDUCATION</h1>
            <div className="cont">
                <div className="Left">
                    <div className="leftimage">
                        <img src="img/education-bg.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="container">
                        {data.map((d) => (
                            <div className={d.featured ? "card featured" : "card"}>
                                <div className="top">
                                    <img src="assets/right-arrow.png" className="left" alt="" />
                                    <img
                                        className="user"
                                        src={d.img}
                                        alt=""
                                    />
                                    {/* <img className="right" src={d.icon} alt="" /> */}
                                </div>
                                <div className="center">
                                    {d.desc}
                                </div>
                                <div className="bottom">
                                    <h3>{d.name}</h3>
                                    <h4>{d.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
