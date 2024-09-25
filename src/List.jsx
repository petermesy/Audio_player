// import PropTypes from './prop-types';
function List(props){
      const itemList=props.item;
      const category=props.category;
    // fruits.sort((a,b) => (a.calories-b.calories));
    // const lowCalFruit=itemList.filter(itemList=>itemList.calories>70);

    const listItems= itemList.map(item=><li className="li-item" key ={item.id}>{item.name}:{item.calories}</li>)
    
return(
  <>
  <h3 className="list-category">{category}</h3>
  <ul className="list-item">{listItems}</ul>

  </>
  ); 
}
// List.PropTypes={
//   category:PropTypes.string,
//   item:PropTypes.arrayOf((PropTypes.shape({id:PropTypes.number, name:PropTypes.string})))
// }
List.defaultProps={
  category:"Category",
  item:[],
}
export default List