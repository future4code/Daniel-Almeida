import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import axios from "axios"

describe("planner task test", () => {

  test('verify with we area in home page', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/planner/i);
    expect(linkElement).toBeInTheDocument(); 
  });

  test('verify if we we area getting API data', async () => {
    
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
         id: "1",
         text: "Cokking",
         day: "Monday"
        }
      ]
    })

    const {findByText} = render(<App/>)

    const task = await findByText(/cokking/i)
    expect(task).toBeInTheDocument()

    const numberOfTasks = await findByText(/you have: 1 task/i)
    expect(numberOfTasks).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-daniel-almeida')
  });

  test('verify if "You dont have tasks"', async () => {
    
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })

    const {findByText} = render(<App/>)

    const task = await findByText(/you don't have tasks/i)
    expect(task).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-daniel-almeida')
  });

  // test("click on button and go to other page", () => {
    
  //   const {getByText, fireEvent} = render(<App/>)

  //   const button = getByText(/Show Create/i)    
  //   fireEvent.click(button)

  // });  

    test("create a new task", () => {
    
    const {getByText, getByPlaceHolderText, fireEvent} = render(<App/>)

    const button = getByText(/Show Create/i)    
    fireEvent.click(button)
    
    const inputTask = getByPlaceHolderText("type your task")
    
    // fireEvent.change(inputTask, {
    //   target: {
    //     value: "Do the dishes",
    //   }
    // })
    
    // const button = getByText(/Create/i) 
    // fireEvent.click(button)
    // expect(getByText(/Do the dishes/i)).toBeInTheDocument()

  });  

})
