# backend-14-m4-c8-Sol
Ejercicio de Typescript para la carrera Backend de Ada ITW

<h1 align="center"> Consigna </h1>

Para este desafío les propongo que desarrollen una app, siguiendo el patrón MVC, que consuma los datos de un JSON generado por una API del clima (ver link). El objetivo es que la app imprima esto en la consola:

<p align="center"><img src="https://i.postimg.cc/d3NRcMHr/Screenshot-from-2023-07-22-00-11-59.png"></p>

El modelo tiene que exportar sólamente dos funciones (puede tener todas las funciones que quieran, pero sólamente debe exportar estas dos):

- `getHourlyTemperatureAndHumidity()` => Retorna una collection cuyos objetos son `{time: '2023-07-21T14:00:00Z', humidity: 86, temperature: 13.26}`.
- `getPressureLevelByTemperature(temperature)` => Retorna una collection en la que la propiedad `temperature` de los objetos sea igual o mayor al valor `temperature` recibido por parámetro. Los objetos que conformen esta collection tienen que tener la forma `{pressureSurfaceLeve: 1009.62, temperature: 21.25}`.
