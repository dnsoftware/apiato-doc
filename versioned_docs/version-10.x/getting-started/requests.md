---
title: Запросы
---

* [Типы содержимого форм](#form-content-types)
* [HTTP заголовки запросов](#http-request-headers)
* [Вызов Endpoints](#calling-endpoints)
  * [Пример вызова незащищенного эндпоинта](#calling-unprotected-endpoint)
  * [Пример вызова защищенного эндпоинта (передача Bearer Token)](#calling-protected-endpoint)

## Типы содержимого форм (W3C) {#form-content-types}

по умолчанию, Apiato настроен на кодирование простых text/ASCII данных `x-www-form-urlencoded`. Однако он поддерживает и другие типы.

### ASCII данные {#ascii-payload}

Чтобы сообщить веб-серверу, что вы отправляете, простые text/ASCII данные (`name=John+Doe&age=18`), вам нужно включить
`Content-Type : x-www-form-urlencoded` в заголовок запроса.

### JSON данные {#json-payload}

Чтобы сообщить веб-серверу, что вы отправляете JSON-formatted данные (`{name : 'John Doe', age: 18}`), вам нужно включить `Content-Type = application/json` в заголовок запроса.

*(вы можете захотеть вернуть данные Json и в этом случае, вы можете сделать это, изменив сериализатор ответа с
`DataArraySerializer` to `JsonApiSerializer`, подробнее об этом в [response page](./responses)).*

## HTTP заголовки запросов {#http-request-headers}

| Header        | Пример значения                     | Когда отправлять                                                             |
|---------------|-------------------------------------|------------------------------------------------------------------------------|
| Accept        | `application/json`                  | ДОЛЖЕН быть отправлен с каждым эндпоинтом.                                   |
| Content-Type  | `application/x-www-form-urlencoded` | ДОЛЖЕН быть отправлен при передаче данных.                                   |
| Authorization | `Bearer {Access-Token-Here}`        | ДОЛЖЕН быть отправлен всякий раз, когда требует эндпоинт (аутентифицированный пользователь).            |
| If-None-Match | `811b22676b6a4a0489c920073c0df914`  | МОЖЕТ быть отправлен для указания конкретного **ETag** предыдущего запроса к этому Endpoint. Если оба ETag совпадают (т.е. такие же) HTTP 304 (not modified) возвращается. |


> #### Берегись!
>
> Обычно вы должны включать `Accept : application/json` HTTP заголовок, когда вы вызываете JSON API. Однако в Apiato
> вы можете заставить своих пользователей отправлять `application/json` установив `'force-accept-header' => true,` в
> `app/Ship/Configs/apiato.php` или позволить им полностью пропустить это, установив `'force-accept-header' => false,`.
> By default this flag is set to false.

## Вызов Endpoints {#calling-endpoints}

#### Пример вызова незащищенного эндпоинта: {#calling-unprotected-endpoint}

```shell
curl -X POST -H "Accept: application/json" -H "Content-Type: application/x-www-form-urlencoded; -F "email=admin@admin.com" -F "password=admin" -F "=" "http://api.domain.test/v2/register"
```

#### Пример вызова защищенного эндпоинта (передача Bearer Token): {#calling-protected-endpoint}

```shell
curl -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." -H "http://api.domain.test/v1/users"
```
