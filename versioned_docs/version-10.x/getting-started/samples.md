---
title: Примеры
---

* [The basic flow](#basic-flow)
* [Sample Route Endpoint](#sample-route-endpoint)
* [Controller Function](#controller-function)
* [Sample Action](#sample-action)
* [Sample User Response](#sample-user-response)


### Основной поток {#basic-flow}

Когда HTTP-запрос получен, он сначала попадает в вашу предопределенный Endpoint (каждый Endpoint находится в своем собственном файле маршрута).

### Пример Endpoint маршрута {#sample-route-endpoint}

```php
Route::get('/hello', [Controller::class, 'sayHello']);
```

После того, как пользователь сделает запрос к эндпоинту `[GET] www.api.apiato.com/v1/hello` вызывается определенная функция контроллера (`sayHello`).

### Пример функции контроллера {#controller-function}

```php
class Controller extends ApiController
{
	public function sayHello(SayHelloRequest $request)
	{
            $helloMessage = app(SayHelloAction::class)->run();

            $this->json([
                $helloMessage
            ]);
	}
}
```

Эта функция принимает класс запроса `SayHelloRequest` для автоматической проверки, есть ли у пользователя право доступа к этому эндпоинту. _Только если у пользователя есть доступ, он переходит к телу функции._

Затем функция вызывает Action (`SayHelloAction`) для выполнения бизнес-логики.

### Action пример {#sample-action}

```php
class SayHelloAction extends Action
{
	public function run()
	{
	    return 'Hello World!';
	}
}
```

Действие может делать что угодно, а затем возвращать результат (может быть объектом, строкой или чем-то еще).

Когда Action завершит свою работу, функция контроллера готовится построить ответ.

Json ответ может быть построен с помощью helper функции `json` (`$this->json(['foo' => 'bar']);`).

### Пример ответа пользователю {#sample-user-response}

```json
[
    "Hello World!"
]
```
