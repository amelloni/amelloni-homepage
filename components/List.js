import Items from "./Item"

export default function List({horse, userData, children}) {

console.log(horse)

    return (
    <>
        <ul>
            {children}
            {userData.map((obj, i) => <Items key={obj._id} data={obj} />)}
        </ul>

        <style jsx>
            {`
            ul {
                height: 30px;
                color: red;
            }
            `}
        </style>
    </>
    )
  }