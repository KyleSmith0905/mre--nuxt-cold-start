# Nuxt Auth Minimum Reproducible Example

The data:
| Has Auth?[1] | Cold Start 1 | Cold Start 2 | Cold Start 3 | Warm Start 1 | Warm Start 2 | Warm Start 3 |
|---|---|---|---|---|---|---|
| Yes | 2.69s | 2.77s | 2.89s | 0.37s | 0.17s | 0.12s |
| No | 0.38s | 0.20s | 0.18s | 0.05s | 0.05s | 0.07s |

1: Has auth indicates that the nuxt.config includes the @sidebase/nuxt-auth module.