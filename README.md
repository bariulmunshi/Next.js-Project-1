# Root Navbar, nested sidebar and next Link component

## next font
## Root Navbar

```sh
stet-1: create array for navbar
>const navLinks = [
{
 path: "/",
 title: "Home",
},
{
 path: "/about",
 title: "About",
},
{
 path: "/profile",
 title: "Profile",
},
{
 path: "/blogs",
 title: "Blogs",
},
{
 path: "/dashboard",
 title: "Dashboard",
},
];
step-2: mapping array for navigation
 <nav className="flex items-center justify-between container mx-auto">
   <h1 className="text-3xl font-semibold">Next Hero</h1>
   <ul className="flex items-center justify-center">
     {navLinks.map(({ path, title }) => (
       <li className="mx-2" key={path}>
         <Link href={path}>{title}</Link>
       </li>
     ))}
   </ul>
 </nav>
```
## Nested sidebar
```sh
 
```

# For not found page

- need to create file within app folder with not-found.js file

# route group/multiple layouts

- create folder within app folder with first bracket that's mean we are creating a group or
  multiple layouts

# dynamic routing

```sh
 step-1: dynamic routes :[id]
 step-2: dynamic catch all route  :[...segment]
 step-3: dynamic optional catch all route  :[[...segment]]
```

# Basic understand

- setting>unknown>ignore
- for enable emmet html for next js : keep the below code in settings.json file
  - "files.associations": {
    "\*.js": "javascriptreact"
    }
