import List from "../components/List"
import Items from "../components/Item"

export default function Users() {
  return (
    <div>
      User

      <List userData={userData} horse="cow">
        <Items data={userData[0]} />
        <Items data={userData[0]} />
        <Items data={userData[0]} />
        <Items data={userData[0]} />
        <Items data={userData[2]} />
      </List>

      <h2>
        {userData[0].username}
      </h2>
    </div>
  )
}
  

const userData = [
  {
  username: "Alberto",
  _id: "dshflvjn"
},
{
  username: "Christoffer",
  _id: "djfdnjsnækmkmklmmn"
},
{
  username: "Esme",
  _id: "djfdnjskmklmmn"
},
]