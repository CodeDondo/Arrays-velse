const listNameInput = document.getElementById('listNameInput')
const listButton = document.getElementById('listButton')
const listIndex = document.getElementById('listIndex')
const listItemText = document.getElementById('listItemText')
const listItemAddButton = document.getElementById('listItemAddButton')
const listIndexRemove = document.getElementById('listIndexRemove')
const listItemIndexRemove = document.getElementById('listItemIndexRemove')
const listItemRemove = document.getElementById('listItemRemove')
let myData=[]


listButton.addEventListener('click', (event) => {
    let myList = {
        name: listNameInput.value,//key value pair
        listItems: []
    }

    myData.push(myList)
    console.table(myData)
})

listItemAddButton.addEventListener('click', (event) => {
    myData[listIndex.value].listItems.push(listItemText.value)
    console.table(myData)
})

listItemRemove.addEventListener('click', (event) => {
    myData[listIndexRemove.value].listItems.splice(listItemIndexRemove.value,1)
    console.table(myData)
})

function showList(listIndex){

    let myListData = myData[listIndex]

    let myListElement = document.getElementById('listElement')

    myListElement.innerHTML = ''

    console.log(myListData);

    myListElement.innerHTML = `<h2>${myListData.name}</h2><ul>`

    myListData.listItems.forEach(listItem,index => {
        
        console.log(listItem,index);
        myListElement.innerHTML += `<li>${listItem.name}</li>`
        
        

    });
    
myListElement.innerHTML += `</ul>`

}

// Modtager et navn string og skaber et nyt liste dataobjekt og gemmer et i myData
function makeList(myName){
    let myList={
        name: myName, // key value pair
        listItems:[]
        }

        myData.push(myList)
        
        console.table(myData);
        
}


// Modtager et navn og opretter list item i første to do list

function makeItem(myName){
    let myListItem={
        name:myName,
        status:true
    }

    myData[0].listItems.push(myListItem)

    console.table(myData);
    
}

// Modtager et index for listen, og et index for item, og fjerner dette item fra listen.

function removeItem(listIndex, itemIndex){
    let myList = myData[listIndex]

    console.log(myList.name);
    
    myList.listItems.splice(itemIndex, 1)

}
