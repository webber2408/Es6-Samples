import { LitElement, html } from "lit";

export class MyElement extends LitElement {
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = "STARTING";
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>

      ${this._listItems.map((item) => html`<li>${item.text}</li>`)}

      <input @input=${this.changeName} placeholder="Enter your name" />

      <!-- Child nodes -->
      <h1>${this.pageTitle}</h1>

      <!-- Attribute -->
      <div class=${this.myTheme}></div>

      <!-- Boolean attribute -->
      <p ?hidden=${this.isHidden}>I may be in hiding.</p>

      <!-- Property -->
      <input .value=${this.value} />

      <!-- Event listener -->
      <button
        @click=${() => {
          console.log("You clicked a button.");
        }}
      >
        ...
      </button>
      
    `;
  }

  get input() {
    return this.renderRoot?.querySelector("#newitem") ?? null;
  }

  addToDo() {
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ];
    this.input.value = "";
  }
}
customElements.define("my-element", MyElement);

//

/*
Always call 
this.requestUpdate() is there is a state change and you want to see the update.
*/


// my-element.js
render() {
    return html`
      ⋮
      <ul>
        ${repeat(
          this.tasks,
          (task) => task.id,
          (task) => html`
            <li>
              <label><input type="checkbox" />${task.label} (${task.id})</label>
            </li>
          `
        )}
      </ul>
    `;
}

//

static properties = {
    things: {state: true},
  };

_deleteThing(index) {
    this.things = this.things.filter((_, i) => i !== index);
}

/*
Use immutable data patterns to trigger an update.
The filter() array method returns a new array which is assigned to this.things.
Since the reference stored in this.things changes,
Lit will know to update the component when _deleteThing() is called.
If the array is mutated instead with something like the splice() array method,
an update must be manually requested.


Takeaways
Lit has built-in support for rendering iterables! Just place arrays, sets, maps, or generators directly into the template expression.
Use the map() directive for a declarative way of taking an iterable and transforming each item into a renderable template. Use it when all necessary state is controlled by Lit.
For complex situations involving more logic, you can build an array of renderable imperatively using the Array methods. Consider using a separate private method to abstract the related logic out of the render() method.
Use the repeat() directive when the rendered DOM nodes have state that isn't controlled by Lit, or when updating the DOM nodes is more expensive than moving them. Provide a key function that produces a unique key for each item of the iterable.
Consider using the range() directive along with map() to programmatically generate a list. These can be nested to produce a multi-dimensional grid as well.
Lastly, when adding event listeners to items rendered from a list, make sure the handler has access to the data it needs that's specific to each item. Using an inline arrow function is often a good way to achieve this by creating a closure for each item.
*/

/*

I have always loved great tech and when it comes about developing high computation and fast
softwares, I see MathWorks excels in the area with products like Matlab and Simulink.

I have an avid interest in Frontend development, building scalable software applications
with experience in optimising frontend in both runtime and build time.

*/