export default function Items({data}) {

    console.log(data)

    return (
    <>
        <li>
            {data.username}
            {data._id}
        </li>

        <style jsx>
            {`
                li {
                    margin-bottom: 1rem;
                    padding: 1rem;
                    border: thin solid green;
                    color: red;
                }
            `}
        </style>
    </>
    )
  }