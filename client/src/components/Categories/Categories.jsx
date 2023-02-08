import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img
                        src="https://images.unsplash.com/photo-1517438984742-1262db08379e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                        alt=""
                    />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    {" "}
                    <img
                        src="https://plus.unsplash.com/premium_photo-1665673312770-90df9f77ddfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            {" "}
                            <img
                                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img
                        src="https://images.unsplash.com/photo-1593431763017-c689a61b729a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;