import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  // This variable for uppercase and lowercase pipes
  text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus labore animi.';

  // this variable for number and decimal pipes
  count : number = 453250;
  countDecimal: number = 45.254889;

  // currency pipes
  currency: number = 4572.25;

  // Date pipes
  date: Date = new Date;

  // json pipes (this pipes is used to work with object)
  person: object={
    id:1, name: 'harahana', age: 15
  }

  // slice pipes (this pipes is used to work with array)
  number: string []= ['one', 'two', 'tree', 'four', 'five'];

  // custom pipes variable
  name: string = 'Harshana';
  para1: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ex repellendus laborum dignissimos commodi. Ut accusamus dolor numquam molestias delectus incidunt quis nisi laborum beatae sit quibusdam laboriosam deleniti eligendi aspernatur itaque unde doloremque neque, ratione necessitatibus omnis quod quisquam iste minus pariatur. Ad fugit quidem consequuntur ducimus veritatis! Quaerat rem ullam cumque odio dolorem enim repellendus earum illum exercitationem fugiat? Culpa sint, voluptatibus rerum atque, aliquam doloribus aspernatur, voluptates dolores a sit nobis ullam quae molestias alias incidunt? Tenetur esse sunt distinctio excepturi est illo repudiandae in cumque ratione ipsa voluptatum illum itaque nemo quam, tempora nobis incidunt ab dignissimos. Eum dicta magni dolore velit fugiat minima quibusdam. Ipsum nihil, cum suscipit porro architecto dolore deleniti quam? Sequi at non corrupti iste nostrum necessitatibus. Illo explicabo iusto at impedit dolores soluta reiciendis doloremque, nihil magnam tempore, ipsa dolorem. Distinctio deleniti deserunt reprehenderit omnis cum, quae rem numquam nemo quasi veniam quis modi consectetur sunt atque necessitatibus ullam dicta quaerat nihil sapiente expedita in nostrum commodi. At vero facilis quod dicta dolore veniam distinctio doloremque nam corrupti quidem, qui ex voluptatibus nulla possimus quis! Ea obcaecati quaerat sunt nulla nobis dolorem, ipsum maiores hic voluptatem eaque totam! Expedita, consequuntur repellendus.  "
}
