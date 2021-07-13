# Routes

## VISITOR (`VISITOR`)

| URL | HTTP Method | Title | Content | Comment |
|--|--|--|--|--|
| `/` | `GET` | ACCUEIL |  TOP-LOVE, POST-FOLLOW, LAST-PUBLICATION | HOMEPAGE |
| `/categories` | `GET` | CATEGORIES | ALL CATEGORIES| CATEGORIES |
| `/toplove` | `GET` | TOP-LOVE | TOP-LOVE POST | TOP-LOVE |
| `/register` | `GET` | REGISTRATION | REGISTRATION FORM | REGISTRATION |
| `/register` | `POST` | REGISTRATION | REGISTRATION FORM | REGISTRATION |
| `/connection` | `GET` | CONNECTION | CONNECTION FORM | CONNECTION |
| `/connection` | `POST` | CONNECTION | CONNECTION FORM | CONNECTION |
| `/post/{id}` | `GET` | POST NAME | POST | POST |
| `/contact` | `GET` | CONTACT | CONTACT FORM | CONTACT |
| `/legalnotices` | `GET` | LEGAL NOTICES | LEGAL NOTICES TEXT | LEGAL NOTICES |
| `/cgu` | `GET` | CGU | CGU | CGU |
| `/animalprotection` | `GET` | ANIMAL PROTECTION | ANIMAL PROTECTION RESSOURCES | ANIMAL PROTECTION |


## USER (`USER`)

| URL | HTTP Method | Title | Content | Comment |
|--|--|--|--|--|
| `/profile` | `GET` | PROFILE | POSTS, PROFILE | PROFILE |
| `/profile` | `POST` | PROFILE | POSTS, PROFILE | PROFILE |
| `/notifications` | `GET` | NOTIFICATIONS | NOTIFICATIONS | NOTIFICATIONS |
| `/posts/{id}` | `POST` | POST NAME | POST | POST |
| `/follows` | `GET` | FOLLOWS | FOLLOWERS POST | FOLLOWERS |
| `/likes` | `GET` | LIKES | LIKED POSTS | LIKE |
| `/tags` | `GET` | FAVORITE TAGS | FAVORITE TAGS | TAGS |
| `/disconnect` | `GET` | DISCONNECT | DISCONNECT | DISCONNECT |

## ADMIN (`ADMIN`)
| URL | HTTP Method | Title | Content | Comment |
|--|--|--|--|--|
| `/admin` | `GET` | ADMIN  | HOME BACKOFFICE | BACKOFFICE |
| `/admin/posts/{id}` | `GET` | ADMIN  | MANAGEMENT POST | BACKOFFICE |
| `/admin/posts/{id}` | `GET` | ADMIN  | MANAGEMENT POST | BACKOFFICE |
| `/admin/posts/list` | `GET` | ADMIN  | POST LIST | BACKOFFICE |
| `/admin/coments/{id}` | `GET` | ADMIN  | MANAGEMENT COMENT | BACKOFFICE |
| `/admin/coments/{id}` | `PUT/PATCH` | ADMIN  | MANAGEMENT COMENT FORM | BACKOFFICE |
| `/admin/coments/list` | `GET` | ADMIN  | COMENT LIST | BACKOFFICE |
| `/admin/list` | `GET` | ADMIN  | BACKOFFICE | BACKOFFICE |
| `/admin/update` | `PUT/PATCH` | ADMIN  | BACKOFFICE | BACKOFFICE |
| `/admin/delete` | `GET` | ADMIN  | BACKOFFICE | BACKOFFICE |
| `/admin/create` | `GET` | ADMIN  | BACKOFFICE | BACKOFFICE |
| `/admin/create` | `POST` | ADMIN  | REGISTER FORM BACKOFFICE | BACKOFFICE |

## API (`API`)
| URL | HTTP Method | Title | Content | Comment |
|--|--|--|--|--|
| `/api/v1/posts/toplove` | `GET` | ADMIN  | API POST TOP LOVE | POST |
| `/api/v1/posts/last` | `GET` | ADMIN  | API POST LAST | POST |
| `/api/v1/posts/follows/{id}` | `GET` | ADMIN  | API POST FOLLOW | POST |
| `/api/v1/users` | `GET` | ADMIN  | API USER | USER |
| `/api/v1/users` | `PUT/PATCH` | ADMIN  | API USER | USER |
| `/api/v1/coments` | `GET` | ADMIN  | API COMENT | COMENT |