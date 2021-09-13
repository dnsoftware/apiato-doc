---
title: Ответы
---

* [Apiato Ответ](#response)
* [Полезная нагрузка ответов Apiato по умолчанию](#default-response-payload)
* [Изменение полезной нагрузки ответа по умолчанию](#change-default-response-payload)
* [Resource Keys](#resource-keys)
* [Форматы сообщений об ошибках](#error-response-formats)
* [Получение ответов от контроллера](#building-response-from-controller)

### Apiato Ответ {#response}

В Apiato вы можете определить свой собственный ответ или использовать один из поддерживаемых сериализаторов.

В настоящее время поддерживаются сериализаторы: (`ArraySerializer`, `DataArraySerializer` и `JsonApiSerializer`). Как предусмотрено [Fractal](http://fractal.thephpleague.com/transformers/).

По умолчанию Apiato использует `DataArraySerializer`. Ниже приведен пример полезной нагрузки ответа.

### Полезная нагрузка ответов Apiato по умолчанию: {#default-response-payload}

`DataArraySerializer` полезная нагрузка ответа выглядит так:

```json
{
  "data": [
    {
      "id": 100,
      ...
      "relation 1": {
        "data": [ // multiple data
          {
            "id": 11,
			  ...
          }
        ]
      },
      "relation 2": {
        "data": { // single data
          "id": 22,
          ...
          }
        }
      }
    },
    ...
  ],
  "meta": {
    "include": [ // what can be included
      "xxx",
      "yyy"
    ],
    "custom": [],
    "pagination": {
      "total": 999,
      "count": 999,
      "per_page": 999,
      "current_page": 999,
      "total_pages": 999,
      "links": {
        "next": "http://api.apiato.test/v1/accounts?page=999"
      }
    }
  }
}
```

**Постраничный ответ:**

Когда данные разбиты на страницы, полезная нагрузка ответа будет содержать `meta` описание о нумерации страниц.

```json
{
  "meta": {
    "include": [
      "xxx",
      "yyy"
    ],
    "custom": [],
    "pagination": { // pagination meta
      "total": 999,
      "count": 999,
      "per_page": 999,
      "current_page": 999,
      "total_pages": 999,
      "links": {
        "next": "http://api.apiato.test/v1/accounts?page=999"
      }
    }
  }
}
```

**Включает в себя:**

Информирование пользователя о том, какие отношения могут быть включены в ответ. Пример: `?include=tags,user`

Подробнее читайте в `Relationships` разделе на [Query Parameters](../core-features/query-parameters#relationships-include) странице.

### Изменение полезной нагрузки ответа по умолчанию: {#change-default-response-payload}

Формат ответа по умолчанию (спецификация) - это `DataArray` Fractal Serializer (`League\Fractal\Serializer\DataArraySerializer`).

Чтобы изменить значение по умолчанию Fractal Serializer откройте `app/Ship/Configs/fractal.php` файл и измените

```text
'default_serializer' => League\Fractal\Serializer\DataArraySerializer::class,
```

Поддерживаемые сериализаторы:
* `ArraySerializer`
* `DataArraySerializer`
* `JsonApiSerializer`

Более подробную информацию можно найти на сайте [Fractal](http://fractal.thephpleague.com/transformers/) и
[Laravel Fractal Wrapper](https://github.com/spatie/laravel-fractal).

В случае возврата JSON данных (`JsonApiSerializer`), вы можете захотеть проверить некоторые стандарты ответа JSON:

* [JSEND](https://labs.omniti.com/labs/jsend) (очень простой)
* [JSON API](http://jsonapi.org/format/) (очень популярен и хорошо задокументирован)
* [HAL](http://stateless.co/hal_specification.html) (полезно в случае гипермедиа)

### Resource Keys {#resource-keys}

Трансформер позволяет добавить `ResourceKey` к преобразованному ресурсу. Вы можете установить `ResourceKey` в вашем ответе двумя способами:

1. Установите его вручную с помощью соответствующего параметра в `$this->transform()` вызове. Обратите внимание, что это установит только
`top level` resource key и не повлияет на resource keys из `included` ресурсов!
2. Укажите его на соответствующей `Model`. Путем перезаписи $resourceKey, (`protected $resourceKey = 'FooBar';`).
Если `$resourceKey` не определен в  `Model`, то `ShortClassName` будет использован как ключ. Например, `ShortClassName` в `App\Containers\AppSection\User\Models\User::class` это `User`.

### Форматы сообщений об ошибках {#error-response-formats}

Посетите каждую функцию, например Authentication и там вы увидите, как выглядит неаутентифицированный ответ, то же самое для Authorization, Validation и так далее.

## Получение ответов от контроллера: {#building-response-from-controller}

Ознакомьтесь с [Controller response builder helper functions](../main-components/controllers).
