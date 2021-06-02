# React-Skeleton-Icons

Componente de React para reenderizar Iconos SVG con un efecto Skeleton, usado para pantallas de carga.

## Modo de uso.

1. importar el componente Skeleton Icon

![primer paso](https://res.cloudinary.com/dnqpdfr5r/image/upload/v1622581322/skeleton%20icons/primer_paso_skeleton_icons_hqcbn0.png)

2. Crear un componente Icon solo con el contenido SVG crudo, dicho componente debe aceptar una prop fill y retornar una etiqueta svg con ese atributo. IMPORTANTE: El Icono SVG no debe tener los atributos (fill, width, height) en su etiqueta svg ya que esos son proporcionados por SkeletonIcon.

![segundo paso](https://res.cloudinary.com/dnqpdfr5r/image/upload/v1622581321/skeleton%20icons/segundo_paso_skeleton_icons_ryku76.png)

3.(Opcional) Crear un archivo que contenga todos los iconos para importarlo desde cualquier lugar con mayor facilidad
![segundo punto cinco](https://res.cloudinary.com/dnqpdfr5r/image/upload/v1622583661/skeleton%20icons/paso-extra_lo40fd.png)

4. Pasar como prop al componente SkeletonIcon el icono que se quiera renderizar(Mas detalles sobre la API mas abajo)

![tercer paso](https://res.cloudinary.com/dnqpdfr5r/image/upload/v1622581321/skeleton%20icons/tercer_paso_skeleton_icons_ngftqf.png)

## API

### Props Componente SkeletonIcon

| Nombre      | Description                          | Tipo        | Defecto     |
| ----------- | ------------------------------------ | ----------- | ----------- |
| icon        | Componente del Icono a Mostrar       | <Icon />    | Valores     |
| loading     | Booleano que indica si se muestra el placeholder o el icono real |  Boolean           | true     |
| width     | Ancho del icono |  "string"           | '70px'     |
| height     | Altura del icono |  "string"           | '70px'     |
