const trajectory = [
  { dx: 0, dy: 0, t: 0 },
  { dx: 0, dy: 0, t: 7 },
  { dx: -4, dy: 0, t: 24 },
  { dx: -5, dy: 0, t: 41 },
  { dx: -6, dy: 0, t: 57 },
  { dx: -6, dy: 0, t: 73 },
  { dx: -3, dy: 0, t: 90 },
  { dx: -1, dy: 0, t: 107 },
  { dx: 0, dy: 0, t: 124 },
  { dx: 0, dy: 0, t: 141 },
  { dx: 0, dy: 0, t: 156 },
  { dx: 0, dy: 0, t: 173 },
  { dx: -1, dy: 0, t: 191 },
  { dx: -1, dy: 0, t: 207 },
  { dx: -1, dy: 0, t: 223 },
  { dx: 0, dy: 0, t: 240 },
  { dx: -1, dy: 0, t: 257 },
  { dx: 0, dy: 0, t: 274 },
  { dx: 0, dy: 0, t: 290 },
  { dx: 0, dy: 0, t: 306 },
  { dx: 0, dy: 0, t: 323 },
  { dx: 0, dy: 0, t: 341 },
  { dx: -1, dy: 1, t: 357 },
  { dx: -2, dy: 0, t: 374 },
  { dx: -2, dy: 1, t: 390 },
  { dx: -2, dy: 1, t: 407 },
  { dx: -1, dy: 0, t: 424 },
  { dx: -1, dy: 0, t: 440 },
  { dx: 0, dy: -2, t: 457 },
  { dx: 12, dy: -11, t: 474 },
  { dx: 25, dy: -17, t: 491 },
  { dx: 26, dy: -13, t: 507 },
  { dx: 26, dy: -13, t: 523 },
  { dx: 26, dy: -13, t: 540 },
  { dx: 26, dy: -13, t: 557 },
  { dx: 26, dy: -13, t: 574 },
  { dx: 26, dy: -13, t: 591 },
  { dx: 13, dy: 31, t: 607 },
  { dx: -20, dy: 14, t: 623 },
  { dx: -26, dy: 14, t: 641 },
  { dx: -25, dy: 9, t: 657 },
  { dx: -20, dy: 2, t: 673 },
  { dx: -12, dy: 1, t: 690 },
  { dx: -11, dy: 0, t: 707 },
  { dx: -6, dy: -4, t: 723 },
  { dx: -1, dy: -3, t: 740 },
  { dx: -1, dy: -4, t: 757 },
  { dx: 0, dy: -4, t: 774 },
  { dx: 0, dy: -3, t: 791 },
  { dx: 1, dy: -1, t: 807 },
  { dx: 0, dy: 0, t: 823 },
  { dx: 1, dy: 0, t: 840 },
  { dx: 1, dy: 0, t: 857 },
  { dx: 1, dy: 0, t: 873 },
  { dx: 0, dy: 1, t: 890 },
  { dx: -2, dy: 4, t: 907 },
  { dx: -3, dy: 5, t: 923 },
  { dx: -3, dy: 3, t: 941 },
  { dx: -1, dy: 1, t: 957 },
  { dx: -1, dy: 0, t: 973 },
  { dx: -1, dy: 0, t: 990 },
  { dx: -1, dy: 0, t: 1007 },
  { dx: 2, dy: -3, t: 1024 },
  { dx: 15, dy: -9, t: 1040 },
  { dx: 22, dy: -12, t: 1057 },
  { dx: 32, dy: -14, t: 1073 },
  { dx: 39, dy: -13, t: 1090 },
  { dx: 39, dy: -13, t: 1107 },
  { dx: 39, dy: -13, t: 1124 },
  { dx: 39, dy: -13, t: 1140 },
  { dx: 39, dy: -13, t: 1157 },
  { dx: 39, dy: -13, t: 1174 },
  { dx: 39, dy: -13, t: 1190 },
  { dx: 39, dy: -13, t: 1207 },
  { dx: 39, dy: -13, t: 1223 },
  { dx: 39, dy: -13, t: 1241 },
  { dx: 39, dy: -13, t: 1256 },
  { dx: 39, dy: -13, t: 1273 },
  { dx: 39, dy: -13, t: 1291 },
  { dx: 39, dy: -13, t: 1307 },
  { dx: 39, dy: -13, t: 1323 },
  { dx: 39, dy: -13, t: 1340 },
  { dx: 39, dy: -13, t: 1357 },
  { dx: 39, dy: -13, t: 1373 },
  { dx: 39, dy: -13, t: 1390 },
  { dx: 39, dy: -13, t: 1407 },
  { dx: 39, dy: -13, t: 1424 },
  { dx: 39, dy: -13, t: 1440 },
  { dx: 39, dy: -13, t: 1457 },
  { dx: 39, dy: -13, t: 1473 },
  { dx: 39, dy: -13, t: 1490 },
  { dx: 39, dy: -13, t: 1507 },
  { dx: 39, dy: -13, t: 1524 },
  { dx: 39, dy: -13, t: 1540 },
  { dx: 39, dy: -13, t: 1557 },
  { dx: 39, dy: -13, t: 1573 },
  { dx: 39, dy: -13, t: 1590 },
  { dx: 39, dy: -13, t: 1607 },
  { dx: 39, dy: -13, t: 1623 },
  { dx: 39, dy: -13, t: 1640 },
  { dx: 39, dy: -13, t: 1657 },
  { dx: 39, dy: -13, t: 1674 },
  { dx: 39, dy: -13, t: 1690 },
  { dx: 39, dy: -13, t: 1707 },
  { dx: 39, dy: -13, t: 1724 },
  { dx: 39, dy: -13, t: 1740 },
  { dx: 39, dy: -13, t: 1757 },
  { dx: 39, dy: -13, t: 1773 },
  { dx: 39, dy: -13, t: 1791 },
  { dx: 39, dy: -13, t: 1807 },
  { dx: 39, dy: -13, t: 1823 },
  { dx: 39, dy: -13, t: 1840 },
  { dx: 39, dy: -13, t: 1857 },
  { dx: 39, dy: -13, t: 1874 },
  { dx: 39, dy: -13, t: 1891 },
  { dx: 39, dy: -13, t: 1907 },
  { dx: 39, dy: -13, t: 1923 },
  { dx: 39, dy: -13, t: 1940 },
  { dx: 39, dy: -13, t: 1957 },
  { dx: 39, dy: -13, t: 1974 },
  { dx: 39, dy: -13, t: 1990 },
  { dx: 39, dy: -13, t: 2007 },
  { dx: 39, dy: -13, t: 2023 },
  { dx: 39, dy: -13, t: 2040 },
  { dx: 39, dy: -13, t: 2057 },
  { dx: 39, dy: -13, t: 2074 },
  { dx: 39, dy: -13, t: 2090 },
  { dx: 39, dy: -13, t: 2107 },
  { dx: 39, dy: -13, t: 2124 },
  { dx: 39, dy: -13, t: 2140 },
  { dx: 39, dy: -13, t: 2157 },
  { dx: 39, dy: -13, t: 2173 },
  { dx: 39, dy: -13, t: 2190 },
  { dx: 39, dy: -13, t: 2207 },
  { dx: 39, dy: -13, t: 2223 },
  { dx: 39, dy: -13, t: 2240 },
  { dx: 39, dy: -13, t: 2259 },
  { dx: 39, dy: -13, t: 2273 },
  { dx: 39, dy: -13, t: 2291 },
  { dx: 39, dy: -13, t: 2307 },
  { dx: 39, dy: -13, t: 2324 },
  { dx: 39, dy: -13, t: 2340 },
  { dx: 39, dy: -13, t: 2357 },
  { dx: 39, dy: -13, t: 2374 },
  { dx: 39, dy: -13, t: 2391 },
  { dx: 39, dy: -13, t: 2406 },
  { dx: 39, dy: -13, t: 2424 },
  { dx: 39, dy: -13, t: 2440 },
  { dx: 39, dy: -13, t: 2456 },
  { dx: 39, dy: -13, t: 2474 },
  { dx: 39, dy: -13, t: 2490 },
  { dx: 39, dy: -13, t: 2507 },
  { dx: 39, dy: -13, t: 2524 },
  { dx: 39, dy: -13, t: 2540 },
  { dx: 39, dy: -13, t: 2556 },
  { dx: 39, dy: -13, t: 2574 },
  { dx: 39, dy: -13, t: 2590 },
  { dx: 39, dy: -13, t: 2606 },
  { dx: 39, dy: -13, t: 2623 },
  { dx: 39, dy: -13, t: 2640 },
  { dx: 39, dy: -13, t: 2657 },
  { dx: -24, dy: 16, t: 2673 },
  { dx: -94, dy: 17, t: 2690 },
  { dx: -181, dy: 35, t: 2707 },
  { dx: -126, dy: 17, t: 2724 },
  { dx: -72, dy: 6, t: 2740 },
  { dx: -50, dy: 1, t: 2757 },
  { dx: -28, dy: 0, t: 2774 },
  { dx: -24, dy: -1, t: 2789 },
  { dx: -9, dy: -4, t: 2807 },
  { dx: -6, dy: -7, t: 2823 },
  { dx: 0, dy: -14, t: 2841 },
  { dx: 9, dy: -18, t: 2857 },
  { dx: 24, dy: -22, t: 2873 },
  { dx: 40, dy: -25, t: 2890 },
  { dx: 95, dy: -26, t: 2907 },
  { dx: 68, dy: -2, t: 2924 },
  { dx: 38, dy: 2, t: 2940 },
  { dx: 41, dy: 20, t: 2957 },
  { dx: 18, dy: 20, t: 2974 },
  { dx: 8, dy: 23, t: 2991 },
  { dx: 1, dy: 18, t: 3007 },
  { dx: -2, dy: 13, t: 3023 },
  { dx: -10, dy: 10, t: 3041 },
  { dx: -9, dy: 5, t: 3057 },
  { dx: -12, dy: 2, t: 3074 },
  { dx: -10, dy: 1, t: 3090 },
  { dx: -4, dy: 0, t: 3107 },
  { dx: -1, dy: -2, t: 3123 },
  { dx: 0, dy: -3, t: 3140 },
  { dx: 0, dy: -4, t: 3157 },
  { dx: 0, dy: -1, t: 3174 },
  { dx: 0, dy: -2, t: 3190 },
  { dx: 0, dy: -2, t: 3206 },
  { dx: 0, dy: -2, t: 3224 },
  { dx: 0, dy: 0, t: 3240 },
  { dx: 0, dy: 0, t: 3256 },
  { dx: 0, dy: 0, t: 3274 },
  { dx: 0, dy: 0, t: 3290 },
  { dx: 0, dy: 0, t: 3307 },
  { dx: 0, dy: 0, t: 3323 },
  { dx: 0, dy: 0, t: 3340 },
  { dx: 0, dy: 0, t: 3357 },
  { dx: 0, dy: 0, t: 3373 },
  { dx: 0, dy: 0, t: 3394 },
  { dx: 0, dy: 0, t: 3406 },
  { dx: 0, dy: 0, t: 3424 },
  { dx: 0, dy: 0, t: 3440 },
  { dx: 0, dy: 0, t: 3457 },
  { dx: 0, dy: 0, t: 3474 },
  { dx: 0, dy: 0, t: 3490 },
  { dx: 0, dy: 0, t: 3507 },
  { dx: 0, dy: 0, t: 3523 },
  { dx: 0, dy: 0, t: 3541 },
  { dx: 0, dy: 0, t: 3556 },
  { dx: 0, dy: 0, t: 3575 },
  { dx: 0, dy: 0, t: 3590 },
  { dx: 0, dy: 0, t: 3607 },
  { dx: 0, dy: 0, t: 3624 },
  { dx: 0, dy: 0, t: 3640 },
  { dx: 0, dy: 0, t: 3657 },
  { dx: 0, dy: 0, t: 3674 },
  { dx: 0, dy: 0, t: 3690 },
  { dx: 0, dy: 0, t: 3706 },
  { dx: 0, dy: 0, t: 3724 },
  { dx: 0, dy: 0, t: 3740 },
  { dx: 0, dy: 0, t: 3756 },
  { dx: 0, dy: 0, t: 3774 },
  { dx: 0, dy: 0, t: 3790 },
  { dx: 0, dy: 0, t: 3807 },
  { dx: 0, dy: 0, t: 3824 },
  { dx: 0, dy: 0, t: 3840 },
  { dx: 0, dy: -1, t: 3857 },
  { dx: -5, dy: -7, t: 3874 },
  { dx: -14, dy: -13, t: 3891 },
  { dx: -27, dy: -29, t: 3907 },
  { dx: -54, dy: -59, t: 3924 },
  { dx: -75, dy: -78, t: 3940 },
  { dx: -93, dy: -83, t: 3957 },
  { dx: -105, dy: -78, t: 3974 },
  { dx: -105, dy: -78, t: 3991 },
  { dx: -105, dy: -78, t: 4007 },
  { dx: -105, dy: -78, t: 4023 },
  { dx: -105, dy: -78, t: 4040 },
  { dx: -105, dy: -78, t: 4057 },
  { dx: -105, dy: -78, t: 4074 },
  { dx: -105, dy: -78, t: 4090 },
  { dx: -105, dy: -78, t: 4107 },
  { dx: -105, dy: -78, t: 4124 },
  { dx: -105, dy: -78, t: 4140 },
  { dx: -105, dy: -78, t: 4157 },
  { dx: -105, dy: -78, t: 4174 },
  { dx: -105, dy: -78, t: 4191 },
  { dx: -105, dy: -78, t: 4207 },
  { dx: -105, dy: -78, t: 4224 },
  { dx: -105, dy: -78, t: 4240 },
  { dx: -105, dy: -78, t: 4257 },
  { dx: -105, dy: -78, t: 4274 },
  { dx: -105, dy: -78, t: 4290 },
  { dx: -105, dy: -78, t: 4307 },
  { dx: -105, dy: -78, t: 4323 },
  { dx: -105, dy: -78, t: 4340 },
  { dx: -105, dy: -78, t: 4356 },
  { dx: -105, dy: -78, t: 4374 },
  { dx: -105, dy: -78, t: 4390 },
  { dx: -105, dy: -78, t: 4406 },
  { dx: -105, dy: -78, t: 4423 },
  { dx: -105, dy: -78, t: 4440 },
  { dx: -105, dy: -78, t: 4457 },
  { dx: -105, dy: -78, t: 4474 },
  { dx: -105, dy: -78, t: 4490 },
  { dx: -105, dy: -78, t: 4507 },
  { dx: -105, dy: -78, t: 4524 },
  { dx: -105, dy: -78, t: 4540 },
  { dx: -105, dy: -78, t: 4557 },
  { dx: -105, dy: -78, t: 4574 },
  { dx: -105, dy: -78, t: 4590 },
  { dx: -105, dy: -78, t: 4607 },
  { dx: 19, dy: -32, t: 4623 },
  { dx: 4, dy: 13, t: 4641 },
  { dx: 4, dy: 13, t: 4657 },
  { dx: 4, dy: 13, t: 4673 },
  { dx: 4, dy: 13, t: 4690 },
  { dx: 4, dy: 13, t: 4707 },
  { dx: 4, dy: 13, t: 4724 },
  { dx: 4, dy: 13, t: 4740 },
  { dx: 4, dy: 13, t: 4757 },
  { dx: 4, dy: 13, t: 4774 },
  { dx: 4, dy: 13, t: 4790 },
  { dx: 4, dy: 13, t: 4806 },
  { dx: 4, dy: 13, t: 4823 },
  { dx: 4, dy: 13, t: 4841 },
  { dx: 4, dy: 13, t: 4856 },
  { dx: 4, dy: 13, t: 4873 },
  { dx: 4, dy: 13, t: 4890 },
  { dx: 4, dy: 13, t: 4907 },
  { dx: 4, dy: 13, t: 4923 },
  { dx: 4, dy: 13, t: 4940 },
  { dx: 4, dy: 13, t: 4957 },
  { dx: 4, dy: 13, t: 4973 },
  { dx: 4, dy: 13, t: 4990 },
  { dx: 0, dy: 0, t: 0 },
  { dx: 0, dy: 0, t: 7 },
  { dx: -4, dy: 0, t: 24 },
  { dx: -5, dy: 0, t: 41 },
  { dx: -6, dy: 0, t: 57 },
  { dx: -6, dy: 0, t: 73 },
  { dx: -3, dy: 0, t: 90 },
  { dx: -1, dy: 0, t: 107 },
  { dx: 0, dy: 0, t: 124 },
  { dx: 0, dy: 0, t: 141 },
  { dx: 0, dy: 0, t: 156 },
  { dx: 0, dy: 0, t: 173 },
  { dx: -1, dy: 0, t: 191 },
  { dx: -1, dy: 0, t: 207 },
  { dx: -1, dy: 0, t: 223 },
  { dx: 0, dy: 0, t: 240 },
  { dx: -1, dy: 0, t: 257 },
  { dx: 0, dy: 0, t: 274 },
  { dx: 0, dy: 0, t: 290 },
  { dx: 0, dy: 0, t: 306 },
  { dx: 0, dy: 0, t: 323 },
  { dx: 0, dy: 0, t: 341 },
  { dx: -1, dy: 1, t: 357 },
  { dx: -2, dy: 0, t: 374 },
  { dx: -2, dy: 1, t: 390 },
  { dx: -2, dy: 1, t: 407 },
  { dx: -1, dy: 0, t: 424 },
  { dx: -1, dy: 0, t: 440 },
  { dx: 0, dy: -2, t: 457 },
  { dx: 12, dy: -11, t: 474 },
  { dx: 25, dy: -17, t: 491 },
  { dx: 26, dy: -13, t: 507 },
  { dx: 26, dy: -13, t: 523 },
  { dx: 26, dy: -13, t: 540 },
  { dx: 26, dy: -13, t: 557 },
  { dx: 26, dy: -13, t: 574 },
  { dx: 26, dy: -13, t: 591 },
  { dx: 13, dy: 31, t: 607 },
  { dx: -20, dy: 14, t: 623 },
  { dx: -26, dy: 14, t: 641 },
  { dx: -25, dy: 9, t: 657 },
  { dx: -20, dy: 2, t: 673 },
  { dx: -12, dy: 1, t: 690 },
  { dx: -11, dy: 0, t: 707 },
  { dx: -6, dy: -4, t: 723 },
  { dx: -1, dy: -3, t: 740 },
  { dx: -1, dy: -4, t: 757 },
  { dx: 0, dy: -4, t: 774 },
  { dx: 0, dy: -3, t: 791 },
  { dx: 1, dy: -1, t: 807 },
  { dx: 0, dy: 0, t: 823 },
  { dx: 1, dy: 0, t: 840 },
  { dx: 1, dy: 0, t: 857 },
  { dx: 1, dy: 0, t: 873 },
  { dx: 0, dy: 1, t: 890 },
  { dx: -2, dy: 4, t: 907 },
  { dx: -3, dy: 5, t: 923 },
  { dx: -3, dy: 3, t: 941 },
  { dx: -1, dy: 1, t: 957 },
  { dx: -1, dy: 0, t: 973 },
  { dx: -1, dy: 0, t: 990 },
  { dx: -1, dy: 0, t: 1007 },
  { dx: 2, dy: -3, t: 1024 },
  { dx: 15, dy: -9, t: 1040 },
  { dx: 22, dy: -12, t: 1057 },
  { dx: 32, dy: -14, t: 1073 },
  { dx: 39, dy: -13, t: 1090 },
  { dx: 39, dy: -13, t: 1107 },
  { dx: 39, dy: -13, t: 1124 },
  { dx: 39, dy: -13, t: 1140 },
  { dx: 39, dy: -13, t: 1157 },
  { dx: 39, dy: -13, t: 1174 },
  { dx: 39, dy: -13, t: 1190 },
  { dx: 39, dy: -13, t: 1207 },
  { dx: 39, dy: -13, t: 1223 },
  { dx: 39, dy: -13, t: 1241 },
  { dx: 39, dy: -13, t: 1256 },
  { dx: 39, dy: -13, t: 1273 },
  { dx: 39, dy: -13, t: 1291 },
  { dx: 39, dy: -13, t: 1307 },
  { dx: 39, dy: -13, t: 1323 },
  { dx: 39, dy: -13, t: 1340 },
  { dx: 39, dy: -13, t: 1357 },
  { dx: 39, dy: -13, t: 1373 },
  { dx: 39, dy: -13, t: 1390 },
  { dx: 39, dy: -13, t: 1407 },
  { dx: 39, dy: -13, t: 1424 },
  { dx: 39, dy: -13, t: 1440 },
  { dx: 39, dy: -13, t: 1457 },
  { dx: 39, dy: -13, t: 1473 },
  { dx: 39, dy: -13, t: 1490 },
  { dx: 39, dy: -13, t: 1507 },
  { dx: 39, dy: -13, t: 1524 },
  { dx: 39, dy: -13, t: 1540 },
  { dx: 39, dy: -13, t: 1557 },
  { dx: 39, dy: -13, t: 1573 },
  { dx: 39, dy: -13, t: 1590 },
  { dx: 39, dy: -13, t: 1607 },
  { dx: 39, dy: -13, t: 1623 },
  { dx: 39, dy: -13, t: 1640 },
  { dx: 39, dy: -13, t: 1657 },
  { dx: 39, dy: -13, t: 1674 },
  { dx: 39, dy: -13, t: 1690 },
  { dx: 39, dy: -13, t: 1707 },
  { dx: 39, dy: -13, t: 1724 },
  { dx: 39, dy: -13, t: 1740 },
  { dx: 39, dy: -13, t: 1757 },
  { dx: 39, dy: -13, t: 1773 },
  { dx: 39, dy: -13, t: 1791 },
  { dx: 39, dy: -13, t: 1807 },
  { dx: 39, dy: -13, t: 1823 },
  { dx: 39, dy: -13, t: 1840 },
  { dx: 39, dy: -13, t: 1857 },
  { dx: 39, dy: -13, t: 1874 },
  { dx: 39, dy: -13, t: 1891 },
  { dx: 39, dy: -13, t: 1907 },
  { dx: 39, dy: -13, t: 1923 },
  { dx: 39, dy: -13, t: 1940 },
  { dx: 39, dy: -13, t: 1957 },
  { dx: 39, dy: -13, t: 1974 },
  { dx: 39, dy: -13, t: 1990 },
  { dx: 39, dy: -13, t: 2007 },
  { dx: 39, dy: -13, t: 2023 },
  { dx: 39, dy: -13, t: 2040 },
  { dx: 39, dy: -13, t: 2057 },
  { dx: 39, dy: -13, t: 2074 },
  { dx: 39, dy: -13, t: 2090 },
  { dx: 39, dy: -13, t: 2107 },
  { dx: 39, dy: -13, t: 2124 },
  { dx: 39, dy: -13, t: 2140 },
  { dx: 39, dy: -13, t: 2157 },
  { dx: 39, dy: -13, t: 2173 },
  { dx: 39, dy: -13, t: 2190 },
  { dx: 39, dy: -13, t: 2207 },
  { dx: 39, dy: -13, t: 2223 },
  { dx: 39, dy: -13, t: 2240 },
  { dx: 39, dy: -13, t: 2259 },
  { dx: 39, dy: -13, t: 2273 },
  { dx: 39, dy: -13, t: 2291 },
  { dx: 39, dy: -13, t: 2307 },
  { dx: 39, dy: -13, t: 2324 },
  { dx: 39, dy: -13, t: 2340 },
  { dx: 39, dy: -13, t: 2357 },
  { dx: 39, dy: -13, t: 2374 },
  { dx: 39, dy: -13, t: 2391 },
  { dx: 39, dy: -13, t: 2406 },
  { dx: 39, dy: -13, t: 2424 },
  { dx: 39, dy: -13, t: 2440 },
  { dx: 39, dy: -13, t: 2456 },
  { dx: 39, dy: -13, t: 2474 },
  { dx: 39, dy: -13, t: 2490 },
  { dx: 39, dy: -13, t: 2507 },
  { dx: 39, dy: -13, t: 2524 },
  { dx: 39, dy: -13, t: 2540 },
  { dx: 39, dy: -13, t: 2556 },
  { dx: 39, dy: -13, t: 2574 },
  { dx: 39, dy: -13, t: 2590 },
  { dx: 39, dy: -13, t: 2606 },
  { dx: 39, dy: -13, t: 2623 },
  { dx: 39, dy: -13, t: 2640 },
  { dx: 39, dy: -13, t: 2657 },
  { dx: -24, dy: 16, t: 2673 },
  { dx: -94, dy: 17, t: 2690 },
  { dx: -181, dy: 35, t: 2707 },
  { dx: -126, dy: 17, t: 2724 },
  { dx: -72, dy: 6, t: 2740 },
  { dx: -50, dy: 1, t: 2757 },
  { dx: -28, dy: 0, t: 2774 },
  { dx: -24, dy: -1, t: 2789 },
  { dx: -9, dy: -4, t: 2807 },
  { dx: -6, dy: -7, t: 2823 },
  { dx: 0, dy: -14, t: 2841 },
  { dx: 9, dy: -18, t: 2857 },
  { dx: 24, dy: -22, t: 2873 },
  { dx: 40, dy: -25, t: 2890 },
  { dx: 95, dy: -26, t: 2907 },
  { dx: 68, dy: -2, t: 2924 },
  { dx: 38, dy: 2, t: 2940 },
  { dx: 41, dy: 20, t: 2957 },
  { dx: 18, dy: 20, t: 2974 },
  { dx: 8, dy: 23, t: 2991 },
  { dx: 1, dy: 18, t: 3007 },
  { dx: -2, dy: 13, t: 3023 },
  { dx: -10, dy: 10, t: 3041 },
  { dx: -9, dy: 5, t: 3057 },
  { dx: -12, dy: 2, t: 3074 },
  { dx: -10, dy: 1, t: 3090 },
  { dx: -4, dy: 0, t: 3107 },
  { dx: -1, dy: -2, t: 3123 },
  { dx: 0, dy: -3, t: 3140 },
  { dx: 0, dy: -4, t: 3157 },
  { dx: 0, dy: -1, t: 3174 },
  { dx: 0, dy: -2, t: 3190 },
  { dx: 0, dy: -2, t: 3206 },
  { dx: 0, dy: -2, t: 3224 },
  { dx: 0, dy: 0, t: 3240 },
  { dx: 0, dy: 0, t: 3256 },
  { dx: 0, dy: 0, t: 3274 },
  { dx: 0, dy: 0, t: 3290 },
  { dx: 0, dy: 0, t: 3307 },
  { dx: 0, dy: 0, t: 3323 },
  { dx: 0, dy: 0, t: 3340 },
  { dx: 0, dy: 0, t: 3357 },
  { dx: 0, dy: 0, t: 3373 },
  { dx: 0, dy: 0, t: 3394 },
  { dx: 0, dy: 0, t: 3406 },
  { dx: 0, dy: 0, t: 3424 },
  { dx: 0, dy: 0, t: 3440 },
  { dx: 0, dy: 0, t: 3457 },
  { dx: 0, dy: 0, t: 3474 },
  { dx: 0, dy: 0, t: 3490 },
  { dx: 0, dy: 0, t: 3507 },
  { dx: 0, dy: 0, t: 3523 },
  { dx: 0, dy: 0, t: 3541 },
  { dx: 0, dy: 0, t: 3556 },
  { dx: 0, dy: 0, t: 3575 },
  { dx: 0, dy: 0, t: 3590 },
  { dx: 0, dy: 0, t: 3607 },
  { dx: 0, dy: 0, t: 3624 },
  { dx: 0, dy: 0, t: 3640 },
  { dx: 0, dy: 0, t: 3657 },
  { dx: 0, dy: 0, t: 3674 },
  { dx: 0, dy: 0, t: 3690 },
  { dx: 0, dy: 0, t: 3706 },
  { dx: 0, dy: 0, t: 3724 },
  { dx: 0, dy: 0, t: 3740 },
  { dx: 0, dy: 0, t: 3756 },
  { dx: 0, dy: 0, t: 3774 },
  { dx: 0, dy: 0, t: 3790 },
  { dx: 0, dy: 0, t: 3807 },
  { dx: 0, dy: 0, t: 3824 },
  { dx: 0, dy: 0, t: 3840 },
  { dx: 0, dy: -1, t: 3857 },
  { dx: -5, dy: -7, t: 3874 },
  { dx: -14, dy: -13, t: 3891 },
  { dx: -27, dy: -29, t: 3907 },
  { dx: -54, dy: -59, t: 3924 },
  { dx: -75, dy: -78, t: 3940 },
  { dx: -93, dy: -83, t: 3957 },
  { dx: -105, dy: -78, t: 3974 },
  { dx: -105, dy: -78, t: 3991 },
  { dx: -105, dy: -78, t: 4007 },
  { dx: -105, dy: -78, t: 4023 },
  { dx: -105, dy: -78, t: 4040 },
  { dx: -105, dy: -78, t: 4057 },
  { dx: -105, dy: -78, t: 4074 },
  { dx: -105, dy: -78, t: 4090 },
  { dx: -105, dy: -78, t: 4107 },
  { dx: -105, dy: -78, t: 4124 },
  { dx: -105, dy: -78, t: 4140 },
  { dx: -105, dy: -78, t: 4157 },
  { dx: -105, dy: -78, t: 4174 },
  { dx: -105, dy: -78, t: 4191 },
  { dx: -105, dy: -78, t: 4207 },
  { dx: -105, dy: -78, t: 4224 },
  { dx: -105, dy: -78, t: 4240 },
  { dx: -105, dy: -78, t: 4257 },
  { dx: -105, dy: -78, t: 4274 },
  { dx: -105, dy: -78, t: 4290 },
  { dx: -105, dy: -78, t: 4307 },
  { dx: -105, dy: -78, t: 4323 },
  { dx: -105, dy: -78, t: 4340 },
  { dx: -105, dy: -78, t: 4356 },
  { dx: -105, dy: -78, t: 4374 },
  { dx: -105, dy: -78, t: 4390 },
  { dx: -105, dy: -78, t: 4406 },
  { dx: -105, dy: -78, t: 4423 },
  { dx: -105, dy: -78, t: 4440 },
  { dx: -105, dy: -78, t: 4457 },
  { dx: -105, dy: -78, t: 4474 },
  { dx: -105, dy: -78, t: 4490 },
  { dx: -105, dy: -78, t: 4507 },
  { dx: -105, dy: -78, t: 4524 },
  { dx: -105, dy: -78, t: 4540 },
  { dx: -105, dy: -78, t: 4557 },
  { dx: -105, dy: -78, t: 4574 },
  { dx: -105, dy: -78, t: 4590 },
  { dx: -105, dy: -78, t: 4607 },
  { dx: 19, dy: -32, t: 4623 },
  { dx: 4, dy: 13, t: 4641 },
  { dx: 4, dy: 13, t: 4657 },
  { dx: 4, dy: 13, t: 4673 },
  { dx: 4, dy: 13, t: 4690 },
  { dx: 4, dy: 13, t: 4707 },
  { dx: 4, dy: 13, t: 4724 },
  { dx: 4, dy: 13, t: 4740 },
  { dx: 4, dy: 13, t: 4757 },
  { dx: 4, dy: 13, t: 4774 },
  { dx: 4, dy: 13, t: 4790 },
  { dx: 4, dy: 13, t: 4806 },
  { dx: 4, dy: 13, t: 4823 },
  { dx: 4, dy: 13, t: 4841 },
  { dx: 4, dy: 13, t: 4856 },
  { dx: 4, dy: 13, t: 4873 },
  { dx: 4, dy: 13, t: 4890 },
  { dx: 4, dy: 13, t: 4907 },
  { dx: 4, dy: 13, t: 4923 },
  { dx: 4, dy: 13, t: 4940 },
  { dx: 4, dy: 13, t: 4957 },
  { dx: 4, dy: 13, t: 4973 },
  { dx: 4, dy: 13, t: 4990 },
  { dx: 0, dy: 0, t: 0 },
  { dx: 0, dy: 0, t: 7 },
  { dx: -4, dy: 0, t: 24 },
  { dx: -5, dy: 0, t: 41 },
  { dx: -6, dy: 0, t: 57 },
  { dx: -6, dy: 0, t: 73 },
  { dx: -3, dy: 0, t: 90 },
  { dx: -1, dy: 0, t: 107 },
  { dx: 0, dy: 0, t: 124 },
  { dx: 0, dy: 0, t: 141 },
  { dx: 0, dy: 0, t: 156 },
  { dx: 0, dy: 0, t: 173 },
  { dx: -1, dy: 0, t: 191 },
  { dx: -1, dy: 0, t: 207 },
  { dx: -1, dy: 0, t: 223 },
  { dx: 0, dy: 0, t: 240 },
  { dx: -1, dy: 0, t: 257 },
  { dx: 0, dy: 0, t: 274 },
  { dx: 0, dy: 0, t: 290 },
  { dx: 0, dy: 0, t: 306 },
  { dx: 0, dy: 0, t: 323 },
  { dx: 0, dy: 0, t: 341 },
  { dx: -1, dy: 1, t: 357 },
  { dx: -2, dy: 0, t: 374 },
  { dx: -2, dy: 1, t: 390 },
  { dx: -2, dy: 1, t: 407 },
  { dx: -1, dy: 0, t: 424 },
  { dx: -1, dy: 0, t: 440 },
  { dx: 0, dy: -2, t: 457 },
  { dx: 12, dy: -11, t: 474 },
  { dx: 25, dy: -17, t: 491 },
  { dx: 26, dy: -13, t: 507 },
  { dx: 26, dy: -13, t: 523 },
  { dx: 26, dy: -13, t: 540 },
  { dx: 26, dy: -13, t: 557 },
  { dx: 26, dy: -13, t: 574 },
  { dx: 26, dy: -13, t: 591 },
  { dx: 13, dy: 31, t: 607 },
  { dx: -20, dy: 14, t: 623 },
  { dx: -26, dy: 14, t: 641 },
  { dx: -25, dy: 9, t: 657 },
  { dx: -20, dy: 2, t: 673 },
  { dx: -12, dy: 1, t: 690 },
  { dx: -11, dy: 0, t: 707 },
  { dx: -6, dy: -4, t: 723 },
  { dx: -1, dy: -3, t: 740 },
  { dx: -1, dy: -4, t: 757 },
  { dx: 0, dy: -4, t: 774 },
  { dx: 0, dy: -3, t: 791 },
  { dx: 1, dy: -1, t: 807 },
  { dx: 0, dy: 0, t: 823 },
  { dx: 1, dy: 0, t: 840 },
  { dx: 1, dy: 0, t: 857 },
  { dx: 1, dy: 0, t: 873 },
  { dx: 0, dy: 1, t: 890 },
  { dx: -2, dy: 4, t: 907 },
  { dx: -3, dy: 5, t: 923 },
  { dx: -3, dy: 3, t: 941 },
  { dx: -1, dy: 1, t: 957 },
  { dx: -1, dy: 0, t: 973 },
  { dx: -1, dy: 0, t: 990 },
  { dx: -1, dy: 0, t: 1007 },
  { dx: 2, dy: -3, t: 1024 },
  { dx: 15, dy: -9, t: 1040 },
  { dx: 22, dy: -12, t: 1057 },
  { dx: 32, dy: -14, t: 1073 },
  { dx: 39, dy: -13, t: 1090 },
  { dx: 39, dy: -13, t: 1107 },
  { dx: 39, dy: -13, t: 1124 },
  { dx: 39, dy: -13, t: 1140 },
  { dx: 39, dy: -13, t: 1157 },
  { dx: 39, dy: -13, t: 1174 },
  { dx: 39, dy: -13, t: 1190 },
  { dx: 39, dy: -13, t: 1207 },
  { dx: 39, dy: -13, t: 1223 },
  { dx: 39, dy: -13, t: 1241 },
  { dx: 39, dy: -13, t: 1256 },
  { dx: 39, dy: -13, t: 1273 },
  { dx: 39, dy: -13, t: 1291 },
  { dx: 39, dy: -13, t: 1307 },
  { dx: 39, dy: -13, t: 1323 },
  { dx: 39, dy: -13, t: 1340 },
  { dx: 39, dy: -13, t: 1357 },
  { dx: 39, dy: -13, t: 1373 },
  { dx: 39, dy: -13, t: 1390 },
  { dx: 39, dy: -13, t: 1407 },
  { dx: 39, dy: -13, t: 1424 },
  { dx: 39, dy: -13, t: 1440 },
  { dx: 39, dy: -13, t: 1457 },
  { dx: 39, dy: -13, t: 1473 },
  { dx: 39, dy: -13, t: 1490 },
  { dx: 39, dy: -13, t: 1507 },
  { dx: 39, dy: -13, t: 1524 },
  { dx: 39, dy: -13, t: 1540 },
  { dx: 39, dy: -13, t: 1557 },
  { dx: 39, dy: -13, t: 1573 },
  { dx: 39, dy: -13, t: 1590 },
  { dx: 39, dy: -13, t: 1607 },
  { dx: 39, dy: -13, t: 1623 },
  { dx: 39, dy: -13, t: 1640 },
  { dx: 39, dy: -13, t: 1657 },
  { dx: 39, dy: -13, t: 1674 },
  { dx: 39, dy: -13, t: 1690 },
  { dx: 39, dy: -13, t: 1707 },
  { dx: 39, dy: -13, t: 1724 },
  { dx: 39, dy: -13, t: 1740 },
  { dx: 39, dy: -13, t: 1757 },
  { dx: 39, dy: -13, t: 1773 },
  { dx: 39, dy: -13, t: 1791 },
  { dx: 39, dy: -13, t: 1807 },
  { dx: 39, dy: -13, t: 1823 },
  { dx: 39, dy: -13, t: 1840 },
  { dx: 39, dy: -13, t: 1857 },
  { dx: 39, dy: -13, t: 1874 },
  { dx: 39, dy: -13, t: 1891 },
  { dx: 39, dy: -13, t: 1907 },
  { dx: 39, dy: -13, t: 1923 },
  { dx: 39, dy: -13, t: 1940 },
  { dx: 39, dy: -13, t: 1957 },
  { dx: 39, dy: -13, t: 1974 },
  { dx: 39, dy: -13, t: 1990 },
  { dx: 39, dy: -13, t: 2007 },
  { dx: 39, dy: -13, t: 2023 },
  { dx: 39, dy: -13, t: 2040 },
  { dx: 39, dy: -13, t: 2057 },
  { dx: 39, dy: -13, t: 2074 },
  { dx: 39, dy: -13, t: 2090 },
  { dx: 39, dy: -13, t: 2107 },
  { dx: 39, dy: -13, t: 2124 },
  { dx: 39, dy: -13, t: 2140 },
  { dx: 39, dy: -13, t: 2157 },
  { dx: 39, dy: -13, t: 2173 },
  { dx: 39, dy: -13, t: 2190 },
  { dx: 39, dy: -13, t: 2207 },
  { dx: 39, dy: -13, t: 2223 },
  { dx: 39, dy: -13, t: 2240 },
  { dx: 39, dy: -13, t: 2259 },
  { dx: 39, dy: -13, t: 2273 },
  { dx: 39, dy: -13, t: 2291 },
  { dx: 39, dy: -13, t: 2307 },
  { dx: 39, dy: -13, t: 2324 },
  { dx: 39, dy: -13, t: 2340 },
  { dx: 39, dy: -13, t: 2357 },
  { dx: 39, dy: -13, t: 2374 },
  { dx: 39, dy: -13, t: 2391 },
  { dx: 39, dy: -13, t: 2406 },
  { dx: 39, dy: -13, t: 2424 },
  { dx: 39, dy: -13, t: 2440 },
  { dx: 39, dy: -13, t: 2456 },
  { dx: 39, dy: -13, t: 2474 },
  { dx: 39, dy: -13, t: 2490 },
  { dx: 39, dy: -13, t: 2507 },
  { dx: 39, dy: -13, t: 2524 },
  { dx: 39, dy: -13, t: 2540 },
  { dx: 39, dy: -13, t: 2556 },
  { dx: 39, dy: -13, t: 2574 },
  { dx: 39, dy: -13, t: 2590 },
  { dx: 39, dy: -13, t: 2606 },
  { dx: 39, dy: -13, t: 2623 },
  { dx: 39, dy: -13, t: 2640 },
  { dx: 39, dy: -13, t: 2657 },
  { dx: -24, dy: 16, t: 2673 },
  { dx: -94, dy: 17, t: 2690 },
  { dx: -181, dy: 35, t: 2707 },
  { dx: -126, dy: 17, t: 2724 },
  { dx: -72, dy: 6, t: 2740 },
  { dx: -50, dy: 1, t: 2757 },
  { dx: -28, dy: 0, t: 2774 },
  { dx: -24, dy: -1, t: 2789 },
  { dx: -9, dy: -4, t: 2807 },
  { dx: -6, dy: -7, t: 2823 },
  { dx: 0, dy: -14, t: 2841 },
  { dx: 9, dy: -18, t: 2857 },
  { dx: 24, dy: -22, t: 2873 },
  { dx: 40, dy: -25, t: 2890 },
  { dx: 95, dy: -26, t: 2907 },
  { dx: 68, dy: -2, t: 2924 },
  { dx: 38, dy: 2, t: 2940 },
  { dx: 41, dy: 20, t: 2957 },
  { dx: 18, dy: 20, t: 2974 },
  { dx: 8, dy: 23, t: 2991 },
  { dx: 1, dy: 18, t: 3007 },
  { dx: -2, dy: 13, t: 3023 },
  { dx: -10, dy: 10, t: 3041 },
  { dx: -9, dy: 5, t: 3057 },
  { dx: -12, dy: 2, t: 3074 },
  { dx: -10, dy: 1, t: 3090 },
  { dx: -4, dy: 0, t: 3107 },
  { dx: -1, dy: -2, t: 3123 },
  { dx: 0, dy: -3, t: 3140 },
  { dx: 0, dy: -4, t: 3157 },
  { dx: 0, dy: -1, t: 3174 },
  { dx: 0, dy: -2, t: 3190 },
  { dx: 0, dy: -2, t: 3206 },
  { dx: 0, dy: -2, t: 3224 },
  { dx: 0, dy: 0, t: 3240 },
  { dx: 0, dy: 0, t: 3256 },
  { dx: 0, dy: 0, t: 3274 },
  { dx: 0, dy: 0, t: 3290 },
  { dx: 0, dy: 0, t: 3307 },
  { dx: 0, dy: 0, t: 3323 },
  { dx: 0, dy: 0, t: 3340 },
  { dx: 0, dy: 0, t: 3357 },
  { dx: 0, dy: 0, t: 3373 },
  { dx: 0, dy: 0, t: 3394 },
  { dx: 0, dy: 0, t: 3406 },
  { dx: 0, dy: 0, t: 3424 },
  { dx: 0, dy: 0, t: 3440 },
  { dx: 0, dy: 0, t: 3457 },
  { dx: 0, dy: 0, t: 3474 },
  { dx: 0, dy: 0, t: 3490 },
  { dx: 0, dy: 0, t: 3507 },
  { dx: 0, dy: 0, t: 3523 },
  { dx: 0, dy: 0, t: 3541 },
  { dx: 0, dy: 0, t: 3556 },
  { dx: 0, dy: 0, t: 3575 },
  { dx: 0, dy: 0, t: 3590 },
  { dx: 0, dy: 0, t: 3607 },
  { dx: 0, dy: 0, t: 3624 },
  { dx: 0, dy: 0, t: 3640 },
  { dx: 0, dy: 0, t: 3657 },
  { dx: 0, dy: 0, t: 3674 },
  { dx: 0, dy: 0, t: 3690 },
  { dx: 0, dy: 0, t: 3706 },
  { dx: 0, dy: 0, t: 3724 },
  { dx: 0, dy: 0, t: 3740 },
  { dx: 0, dy: 0, t: 3756 },
  { dx: 0, dy: 0, t: 3774 },
  { dx: 0, dy: 0, t: 3790 },
  { dx: 0, dy: 0, t: 3807 },
  { dx: 0, dy: 0, t: 3824 },
  { dx: 0, dy: 0, t: 3840 },
  { dx: 0, dy: -1, t: 3857 },
  { dx: -5, dy: -7, t: 3874 },
  { dx: -14, dy: -13, t: 3891 },
  { dx: -27, dy: -29, t: 3907 },
  { dx: -54, dy: -59, t: 3924 },
  { dx: -75, dy: -78, t: 3940 },
  { dx: -93, dy: -83, t: 3957 },
  { dx: -105, dy: -78, t: 3974 },
  { dx: -105, dy: -78, t: 3991 },
  { dx: -105, dy: -78, t: 4007 },
  { dx: -105, dy: -78, t: 4023 },
  { dx: -105, dy: -78, t: 4040 },
  { dx: -105, dy: -78, t: 4057 },
  { dx: -105, dy: -78, t: 4074 },
  { dx: -105, dy: -78, t: 4090 },
  { dx: -105, dy: -78, t: 4107 },
  { dx: -105, dy: -78, t: 4124 },
  { dx: -105, dy: -78, t: 4140 },
  { dx: -105, dy: -78, t: 4157 },
  { dx: -105, dy: -78, t: 4174 },
  { dx: -105, dy: -78, t: 4191 },
  { dx: -105, dy: -78, t: 4207 },
  { dx: -105, dy: -78, t: 4224 },
  { dx: -105, dy: -78, t: 4240 },
  { dx: -105, dy: -78, t: 4257 },
  { dx: -105, dy: -78, t: 4274 },
  { dx: -105, dy: -78, t: 4290 },
  { dx: -105, dy: -78, t: 4307 },
  { dx: -105, dy: -78, t: 4323 },
  { dx: -105, dy: -78, t: 4340 },
  { dx: -105, dy: -78, t: 4356 },
  { dx: -105, dy: -78, t: 4374 },
  { dx: -105, dy: -78, t: 4390 },
  { dx: -105, dy: -78, t: 4406 },
  { dx: -105, dy: -78, t: 4423 },
  { dx: -105, dy: -78, t: 4440 },
  { dx: -105, dy: -78, t: 4457 },
  { dx: -105, dy: -78, t: 4474 },
  { dx: -105, dy: -78, t: 4490 },
  { dx: -105, dy: -78, t: 4507 },
  { dx: -105, dy: -78, t: 4524 },
  { dx: -105, dy: -78, t: 4540 },
  { dx: -105, dy: -78, t: 4557 },
  { dx: -105, dy: -78, t: 4574 },
  { dx: -105, dy: -78, t: 4590 },
  { dx: -105, dy: -78, t: 4607 },
  { dx: 19, dy: -32, t: 4623 },
  { dx: 4, dy: 13, t: 4641 },
  { dx: 4, dy: 13, t: 4657 },
  { dx: 4, dy: 13, t: 4673 },
  { dx: 4, dy: 13, t: 4690 },
  { dx: 4, dy: 13, t: 4707 },
  { dx: 4, dy: 13, t: 4724 },
  { dx: 4, dy: 13, t: 4740 },
  { dx: 4, dy: 13, t: 4757 },
  { dx: 4, dy: 13, t: 4774 },
  { dx: 4, dy: 13, t: 4790 },
  { dx: 4, dy: 13, t: 4806 },
  { dx: 4, dy: 13, t: 4823 },
  { dx: 4, dy: 13, t: 4841 },
  { dx: 4, dy: 13, t: 4856 },
  { dx: 4, dy: 13, t: 4873 },
  { dx: 4, dy: 13, t: 4890 },
  { dx: 4, dy: 13, t: 4907 },
  { dx: 4, dy: 13, t: 4923 },
  { dx: 4, dy: 13, t: 4940 },
  { dx: 4, dy: 13, t: 4957 },
  { dx: 4, dy: 13, t: 4973 },
  { dx: 4, dy: 13, t: 4990 },
];
