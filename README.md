<!-- ? 1. Difference between DOM Selectors 

* getElementById() is used when we want to find one specific element using its unique ID.

* getElementsByClassName() finds all elements that share the same class name and returns a collection.

* querySelector() works like a multi-tool; it can select elements using ID, class, or tag, but it only returns the first matching element.

* querySelectorAll() is similar to querySelector(), but it returns all matching elements as a NodeList.
-->


<!-- ? 2. How to Create and Insert a New Element 

* To create a new element, we use document.createElement() and specify the tag name (such as 'div', 'p', etc.).

* After creating the element, we can add content or attributes if needed.

* Finally, we use appendChild() (or similar methods) to insert the new element inside a parent element so it becomes visible on the webpage.
-->


<!-- ? 3. What is Event Bubbling? 

* Event Bubbling is a process where an event starts from the target element and then moves upward through its parent elements.

* For example, if we click a button inside a div, the click event will first trigger on the button, then on the div, and then on higher parent elements.

* It works like a bubble rising from the bottom to the top.
-->


<!-- ? 4. What is Event Delegation? 

* Event Delegation is a technique where we attach a single event listener to a parent element instead of adding listeners to multiple child elements.

* The parent element handles events for its children using event bubbling.

* This approach improves performance, reduces memory usage, and works even for dynamically added elements.
-->


<!-- ? 5. Difference between preventDefault() and stopPropagation() 

* preventDefault() stops the browser's default behavior. For example, it prevents a form from submitting or a link from navigating.

* stopPropagation() stops the event from bubbling up to parent elements.

* In simple terms, preventDefault() controls the browser action, while stopPropagation() controls the event flow.
-->