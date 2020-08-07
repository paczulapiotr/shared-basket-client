import {render, cleanup} from "@testing-library/react" 
import SideBar from ".."
import Context from 'src/components/contexts/sharedBasketsContext'
import React from 'react'

//antd mock fix
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

describe("Should render list", () => {
    it("Should add items to list",()=>{

        const {getByText } = render(<Context><SideBar/></Context>)
        const addBtn = getByText(/Update/i)
        addBtn.click();
        
        const listItem = getByText(/First basket/)
        expect(listItem).toBeTruthy()
        cleanup()
    })

})