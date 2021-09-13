---
title: Соглашения
---

* [Использование HTTP-методов в RESTful API](#http-methods-usage-in-restful-apis)
* [Соглашения об именах для Routes & Actions](#naming-conventions-for-routes-and-actions)
* [Общие рекомендации и принципы RESTful URLs](#general-guidelines-and-principles-for-restful-urls)
* [Примеры хороших URL](#good-url-examples)
* [Общие принципы для HTTP-методов](#general-principles-for-http-methods)

### Использование HTTP-методов в RESTful API {#http-methods-usage-in-restful-apis}
- GET (SELECT): получить определенный ресурс с сервера или список ресурсов.
- POST (CREATE): создать новый ресурс на сервере.
- PUT (UPDATE): обновить ресурс на сервере, предоставив весь ресурс.
- PATCH (UPDATE): обновить ресурс на сервере, предоставив только измененные атрибуты.
- DELETE (DELETE): удалить ресурс с сервера.

### Соглашения об именах для Routes & Actions {#naming-conventions-for-routes-and-actions}

- **GetAllResource**: получить все ресурсы.
- **FindResourceByID**: для поиска отдельного ресурса по его уникальному идентификатору.
- **CreateResource**: для создания нового ресурса.
- **UpdateResource**: обновить существующий ресурс.
- **DeleteResource**: удалить ресурс.

### Общие рекомендации и принципы RESTful URLs {#general-guidelines-and-principles-for-restful-urls}

- URL-адрес идентифицирует ресурс.
- URL-адреса должны включать существительные, а не глаголы.
- Используйте существительные во множественном числе только для единообразия (без существительных в единственном числе).
- Используйте HTTP-команды (GET, POST, PUT, DELETE) для работы с коллекциями и элементами.
- Вам не нужно заходить глубже, чем resource/identifier/resource.
- Поместите номер версии в основу вашего URL, например`http://apiato.test/v1/path/to/resource`.
- Если входные данные изменяют логику конечной точки, они должны быть переданы в URL-адресе. Если нет, можете зайти в заголовок "like Auth Token".
- Не используйте параметры запроса для изменения состояния.
- Не используйте пути в смешанном регистре, если можете; строчные буквы лучше всего.
- Не используйте в своих URI расширения, зависящие от реализации (.php, .py, .pl и т.д.).
- Максимально ограничьте пространство URI. И делайте отрезки пути короткими.
- Не помещайте метаданные в тело ответа, которые должны быть в заголовке.

### Примеры хороших URL {#good-url-examples}

- Найти автомобиль по уникальному идентификатору (ID):
	- `GET http://www.api.apiato.test/v1/cars/123`
- Получить все автомобили:
	- `GET http://www.api.apiato.test/v1/cars`
- Найти автомобили по одному или нескольким полям:
	- `GET http://www.api.apiato.test/v1/cars?search=maker:mercedes`
	- `GET http://www.api.apiato.test/v1/cars?search=maker:mercedes;color:white`
- Упорядочить и отсортировать результат запроса:
	- `GET http://www.api.apiato.test/v1/cars?orderBy=created_at&sortedBy=desc`
	- `GET http://www.api.apiato.test/v1/cars?search=maker:mercedes&orderBy=created_at&sortedBy=desc`
- Укажите необязательные поля:
	- `GET http://www.api.apiato.test/v1/cars?filter=id;name;status`
	- `GET http://www.api.apiato.test/v1/cars/123?filter=id;name;status`
- Получите всех водителей, принадлежащих автомобилю:
	- `GET http://www.api.apiato.test/v1/cars/123/drivers`
	- `GET http://www.api.apiato.test/v1/cars/123/drivers/123/addresses`
- Включить связь объектов "Водители" с ответом автомобиля:
	- `GET http://www.api.apiato.test/v1/cars/123?include=drivers`
	- `GET http://www.api.apiato.test/v1/cars/123?include=drivers,owner`
- Добавить новую машину:
	- `POST http://www.api.apiato.test/v1/cars`
- Добавить нового водителя в машину:
	- `POST http://www.api.apiato.test/v1/cars/123/drivers`

### Общие принципы для HTTP-методов {#general-principles-for-http-methods}

- Никогда не используйте GET для изменения состояния; чтобы робот Googlebot не повредил ваши данные. И как можно чаще используйте GET.
- Не используйте PUT, если вы не обновляете весь ресурс. И если вы также не можете законно выполнить GET для того же URI.
- Не используйте POST для получения информации, которая является долгоживущей или которую целесообразно кэшировать.
- Не выполняйте операцию, не идемпотентную с PUT.
- Используйте GET для таких вещей, как вычисления, если ваш ввод не велик, в этом случае используйте POST.
- Используйте POST вместо PUT, если сомневаетесь.
- Используйте POST всякий раз, когда вам нужно сделать что-то похожее на RPC.
- Используйте PUT для более крупных или иерархических классов ресурсов.
- Используйте DELETE вместо POST для удаления ресурсов.
