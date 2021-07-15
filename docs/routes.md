# Routes

## VISITOR (`VISITOR`)

| URL | HTTP Method | Title | Content | Comment | MVP |
|--|--|--|--|--|--|
| `/` | `GET` | ACCUEIL |  TOP-LOVE, POST-FOLLOW, LAST-PUBLICATION | HOMEPAGE | YES |
| `/categories` | `GET` | CATEGORIES | ALL CATEGORIES| CATEGORIES | YES |
| `/categories/{id}` | `GET` | CATEGORIES-type | Pictures of a given category | CATEGORIES | YES |
| `/toplove` | `GET` | TOP-LOVE | TOP-LOVE POST | TOP-LOVE | YES |
| `/enregistrement` | `GET` | REGISTRATION | REGISTRATION FORM | REGISTRATION | YES |
| `/connexion` | `GET` | CONNECTION | CONNECTION FORM | CONNECTION | YES |
| `/post/{id}` | `GET` | POST NAME | Detail of the post with all the comemnts | POST | YES |
| `/contact` | `GET` | CONTACT | CONTACT FORM | CONTACT | YES |
| `/mentions-legales` | `GET` | LEGAL NOTICES | LEGAL NOTICES TEXT SAME AS CGU| LEGAL NOTICES | YES |
| `/cgu` | `GET` | CGU | CGU | CGU | YES |
| `/protection-animale` | `GET` | ANIMAL PROTECTION | ANIMAL PROTECTION RESSOURCES | ANIMAL PROTECTION | NO |


## USER (`USER`)

| URL | HTTP Method | Title | Content | Comment | MVP |
|--|--|--|--|--|--|
| `/profil` | `GET` | PROFILE | Profile detail | PROFILE | YES |
| `/notifications` | `GET` | NOTIFICATIONS | Notify number of likes , new comments etc | NOTIFICATIONS | NO |
| `/follows` | `GET` | FOLLOWS | Post from account the user follows| FOLLOWERS | NO |
| `/likes` | `GET` | LIKES | LIKED POSTS | LIKE | YES |
| `/tags` | `GET` | FAVORITE TAGS | FAVORITE TAGS | TAGS | NO |
| `/deconnexion` | `GET` | DISCONNECT | DISCONNECT | DISCONNECT | YES |

## ADMIN (`ADMIN`)
| URL | HTTP Method | Title | Content | Comment | MVP |
|--|--|--|--|--|--|
| `/admin` | `GET` | ADMIN  | Home back office with the links to the différents menus | BACKOFFICE | YES |
| `/admin/posts/{id}` | `GET` | ADMIN  | Form to manage posts visibility | BACKOFFICE | YES |
| `/admin/posts/{id}` | `PUT/PATCH` | ADMIN  | MANAGEMENT POST | BACKOFFICE | YES |
| `/admin/posts/liste` | `GET` | ADMIN  | MANAGEMENT POST | BACKOFFICE | YES |
| `/admin/commentaires/{id}` | `GET` | ADMIN  | Form to manage comments visibility | BACKOFFICE | YES |
| `/admin/commentaires/{id}` | `PUT/PATCH` | ADMIN  | MANAGEMENT COMENT FORM | BACKOFFICE | YES |
| `/admin/commentaires/liste` | `GET` | ADMIN  | COMENT LIST | BACKOFFICE | YES |
| `/admin/utlisateurs/liste` | `GET` | ADMIN  | List all users with link to their admin pagesy | BACKOFFICE | YES |
| `/admin/utlisateurs/update` | `GET` | ADMIN  | form to manage data from a user  | BACKOFFICE | YES |
| `/admin/utlisateurs/update` | `PUT/PATCH` | ADMIN  | form to manage data from a user  | BACKOFFICE | YES |
| `/admin/utlisateurs/delete` | `GET` | ADMIN  | Link to delete a user | BACKOFFICE | YES |
| `/admin/utlisateurs/create` | `GET` | ADMIN  | Form to create a new user | BACKOFFICE | YES |
| `/admin/utlisateurs/create` | `POST` | ADMIN  | Route to create a new user | BACKOFFICE | YES |

## API (`API`)
| URL | HTTP Method | Title | Content | Comment | MVP |
|--|--|--|--|--|--|
| `/api/v1/posts/toplove` | `GET` | ADMIN  | Top 10 over the last 7 days | POST | YES |
| `/api/v1/posts/last` | `GET` | ADMIN  | Last 10 most recent posts | POST | YES |
| `/api/v1/posts/follows/{id}` | `GET` | ADMIN  | API POST FOLLOW - Where id is the user  id | POST | NO |
| `/api/v1/utilisateur/{id}` | `GET` | ADMIN  | API for pages to manage users | USER | YES |
| `/api/v1/utilisateur/{id}` | `PUT/PATCH` | ADMIN  | API for pages to update users| USER | YES |
| `/api/v1/utilisateur/{id}` | `DELETE` | ADMIN  | API for pages to delete users | USER | YES |
| `/api/v1/enregistrement/utlisateurs` | `POST` | REGISTRATION  | REGISTRATION FORM | USER | YES |
| `/api/v1/connexion` | `POST` | CONNECTION  | CONNECTION FORM | USER | YES |
| `/api/v1/posts` | `POST` | POST NAME  | API to create a new post | USER | YES |
| `/api/v1/posts/{id}` | `GET` | POST NAME  | API to read a post | USER | YES |
| `/api/v1/posts/{id}` | `PUT/PATCH` | POST NAME  | API to manage a post | USER | YES |
| `/api/v1/posts/{id}` | `DELETE` | POST NAME  | API to delete a post | USER | YES |