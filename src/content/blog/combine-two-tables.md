---
pubDatetime: 2024-03-17T21:09:32.000-04:00
modDatetime: 2024-03-18T09:13:05.571-04:00
slug: combine-two-tables
title: 175. Combine Two Tables
difficulty: Easy
draft: false
---

```sql
select p.firstName, p.lastName, a.city, a.state
from person as p
left join address as a
on a.personId = p.personId
```

W.I.P
