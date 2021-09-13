## One way data binding

* Enviar un valor desde un componente y que se refleje en el código HTML:

```javascript
newCharacter : Character = {
	name    : '',
	power   : 0
}
```

```html
<h3> {{ newCharacter.name }} </h3>
```
---

* Emitir un evento desde el código HTML y que eso repercuta en el componente:

```html
<input 
			type = "text"
			(input) = changeName($event)
>
```

```javascript
changeName( event : any ) {
	console.log( event.target.value );
}
```
---

## Two way data binding

* Haciendo uso de **ngModel** se puede enviar el dato que se encuentra en el input hacia el componente, y además, lo que esté seteado en la propiedad del componente, se verá reflejado en el código HTML. Recordar que cuando se hace uso de esta directiva se debe incluir en el input el atributo **name**

```javascript
newCharacter : Character = {
	name    : '',
	power   : 0
}
```

```html
<input 
			type = "text"
			name = "name"
			[(ngModel)] = "newCharacter.name"
>
```

Se pone:

```html
	[(ngModel)] = "newCharacter.name"
```

Porque estoy indicando que quiero tanto escuchar como emitir un evento. Y el valor de ese evento me interesa que caiga en la propiedad newCharacter.name.

## Pipes
Se utilizan para transformar visualmente la información

```html
    <p> {{ character.power | number }} </p>
```

## Comandos

* Crear un nuevo componente
ng generate component path/donde/crear/el/componente/nombre_componente 
ng g c component path/donde/crear/el/componente/nombre_componente 

Si no quiero que se cree el archivo de prueba, bastaría con agregar el comando --skipTests
path/donde/crear/el/componente/nombre_componente --skipTests

## @Input
Se utiliza para pasar información desde el componente padre hacia el componente hijo.

[characters] = "characters"

* "characters" es el arreglo que se encuentra en el componente padre
* [characters] es una propiedad del componente hijo que quiero asociarle ese arreglo. 

## @Onput
Se utiliza para pasar información desde el componente hijo hacia el componente padre. Emite un valor al padre. Es como un evento click, por ejemplo.

```html
@Output()
onNewCharacter  : EventEmitter<Character> = new EventEmitter();
```

Le indicamos que el evento va a emitir objetos de tipo Character.

```html
	(onNewCharacter)    = "addNewCharacter( $event )" 
```

addNewCharacter() será el evento que se va a disparar o emitir en el componente padre.
Por lo tanto, en el componente padre, se define ese método.

addNewCharacter( character : Character ) {
this.characters.push(character);
}


## Servicios
En el módulo al que pertenece se lo "registra" en el arreglo "providers".
Los servicios van a servir como singletons en todo el módulo.
El servicio no se va a llamar/inyectar hasta que alguien lo requiera.

```javascript
import { Injectable } from "@angular/core";

@Injectable()
export class DbzService {
    constructor() {
       console.log('Initialized service'); 
    }
}
```

Inyecto el servicio en el módulo

```javascript
constructor( private dbzService : DbzService ) { }
```

Por más que inyecte el servicio nuevamente (de la misma manera, inclusive) en otro componente, el servicio se intanciará una sola vez.
Esto se debe a que se utiliza el patrón de diseño "Prototype".
Los servicios son un lugar centralizado donde se puede encontrar la información.
