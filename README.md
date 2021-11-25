<img width="400" alt="Logo(2)" src="https://user-images.githubusercontent.com/44473195/143422716-e1d42be0-445a-4241-b19d-a926d6e1d0ef.png">

A Simple and easy to use url shortener made with React and expressjs.

![Quickurl(1)](https://user-images.githubusercontent.com/44473195/143422410-a136bdc1-be16-4308-9cf9-350fd22cd78c.png)


## Getting started

**Run for development**

Make sure you have docker and docker-compose installed on your host machine and then run

```
make build-dev
make run-dev
```

You can then navigate to `localhost:3000` and start making changes from our editor. Changes should be visible after you reload the page.


**Run for production**

For production you should have a [server with docker](https://marketplace.digitalocean.com/apps/docker) ready to go.

First configure your build through the Makefile and the Caddyfile (Change domain etc) and copy the files to your server by running:

```
make copy-files
```

After that you can build and run the containers by executing:

```
make build-production
make run-production
```

### IMPORTANT

**These are not the best production practices and you should be very careful how you deploy projects on the internet. This project is not intended to replace [tinyurl](https://tinyurl.com/app) or [bitly](https://bitly.com/) by any means and should not be used on a daily basis (at least not yet). It's just a proof of concept and a chance for me to sharpen my skills :)**

## License

View License [here](https://github.com/dimpram/quickurl/blob/main/LICENSE.md)
