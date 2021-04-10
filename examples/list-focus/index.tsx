import * as L from "lonna"
import { h, mount, ListView } from "../../src/index"

const numbers = L.interval(3000, 1).pipe(L.map(() => Math.floor(Math.random() * 100)))

const dots = numbers.pipe(L.scan([] as number[], (nums, num) => nums.concat(num).sort(), L.globalScope))

const Root = () =>
    <div id="root">
        <ListView<number, number> {...{ 
            observable: dots, 
            renderItem: (n => <div>
                <input value={n}/>
            </div>)
        }}/>
    </div>

mount(<Root/>, document.getElementById("root")!)
