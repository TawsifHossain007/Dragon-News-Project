import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch('/categories.json').then(res=>res.json())

const Category = () => {
    const categories = use(categoryPromise)
    console.log(categories)
    return (
        <div>
            <h1 className='font-bold'>All Categories</h1>
            <div className="grid grid-cols-1 mt-5 gap-3">
                {
                    categories.map(category => <NavLink className={"btn bg-base-100 hover:bg-base-300"} key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;