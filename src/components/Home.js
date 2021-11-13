import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home(props) {
//   click handler to take us to Form
  const history = useHistory();

  const routeToForm = () => {
    history.push('./components/Form');
  }

  return (
    <div className='home-wrapper'>
        <section className = "main">
            <img
                className='home image'
                src='../Assets/Pizza.jpg'
                alt='Pizza'
            />
            <button
                onClick ={ routeToForm}
                id = "order-pizza"
                className ='createPizza button'
            >
            Pizza?
            </button>
        </section>
        <section className = "bottom-imgs top">
            <div>
                <h2>Food Delivery in Gotham City</h2>
                <img src = "../Assets/Pizza.jpg" alt = "Pizza"/>
                <h3>McDonald's</h3>
                <h4>$ - American - Fast Food - Burgers</h4>
                <button className = "left"/>
                <button className = "right"/>
            </div>
            <div>
            <img src = "../Assets/Pizza.jpg" alt = "Pizza"/>
                <h3>Sweetgreen</h3>
                <h4>$ - Healthy - Salads</h4>
                <button className = "left"/>
                <button className = "right"/>
            </div>
            <div>
            <img src = "../Assets/Pizza.jpg" alt = "Pizza"/>
                <h3>Starbucks</h3>
                <h4>$ - Cafe - Coffee and Tea - Breakfast and Brunch</h4>
                <button className = "left"/>
                <button className = "right"/>
            </div>
        </section>
        <section className = "bottom-imgs bottom">
            <div>
                <img src = "../Assets/Pizza.jpg" alt = "Pizza"/>
            </div>
            <div>
                <img src = "../Assets/Pizza.jpg" alt = "Pizza"/>
            </div>
            <div>
                <img src = "../Assets/Pizza.jpg" alt = "Pizza"/>
            </div>
        </section>
    </div>
  )
}