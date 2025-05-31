# System Architecture and Build Guide

Are you curious about how this site was put together?  Interested in building
something similar of your own?  Then let me know!.. because I'm tempted to do a
write-up of all these details, from frontend design to hosting details and
database schema.  Including security, authentication, authorization,
application costs, scalability and operational desiderata.

I have a larger book-shaped project where I cover a lot of the above, but this
site is a good-sized intermediate step which I feel able to tackle (and I've
been taking good notes throughout the construction of this app).

<!-- TODO diagram of the system components
browser (Vue client)
CDN / WAF / Load Balancer
Workers / Vue server
R2 for media storage, free bandwidth
D1 for user relations and consistent/durable index and comments
KV for auth keys (soon moving to secret storage, documenting both)
Durable Objects for realtime chat
Calls for realtime videochat
more?
-->
