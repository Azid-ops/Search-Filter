import React, {useState} from 'react';

export function App(props) {

  const list = ["Dog","Cat","Cow","Humming Bird","Fox","Lion","Tiger","Panther"];
  const [myList,setMyList] = useState([]);
  const [field,setField] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    let keys = event.target.value;
    let filteredList = list.filter(item => item.startsWith(keys));
    setMyList(filteredList);
  }

  const showList = () => {
      setMyList(list)
  }
  return (
    <div className='App'>
      <input name="field" onClick={showList} onChange={handleChange} placeholder="Enter to See all Animals"/>
      {
          myList.map((item, key) => <div key={key}>{item}</div>)
      }
    </div>
  );
}
