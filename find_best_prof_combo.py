
data = ["FGH",
        "EGH",
        "EFG",
        "CFH",
        "CGH",
        "CFG",
        "DFG",
        "DEG",
        "DGH",
        "CGI",
        "FHI",
        "EFI",
        "FGI",
        "CGK",
        "DHK",
        "CFK",
        "FHK",
        "FGK",
        "GHK",
        "GJK",
        "CDJ",
        "DGJ",
        "CGJ"]

score = [6,
          6,
          6,
          7,
          6,
          6,
          5,
          6,
          6,
          6,
          5,
          5,
          5,
          6,
          5,
          7,
          5,
          7,
          6,
          6,
          6,
          6,
          7]

import itertools

out = itertools.combinations(data, 6)
traits = 'CCDDEEFFGGHHIIJJKK'
traits = ['C','D','E','F','G','H','I','J','K']
fullcoverage = 'CDEFGHIJK'

ctr = 0
combo_found = []
for idx, comb in enumerate(out):
  r = ''.join(comb)
  r = ''.join(sorted(r))
  testcoverage = ''.join(set(r))
  testcoverage = ''.join(sorted(testcoverage))
  
#   print r
  if testcoverage == fullcoverage:
    skip = False
    count = 0
    for t in traits:
      if r.count(t) > 3:
        skip = True
        break
      if r.count(t) == 3:
        count += 1
    if not skip and count < 2:
      ctr += 1
#       print idx, r
      inds = []
      s = 0
      for item in comb:
        index = data.index(item)
        inds.append(index+1)
        s += score[index]
      inds = sorted(inds)
      print inds, s
#       combo_found.append(''.join([str(i) for i in inds]))
print 'done'
print ctr



# (_.uniq(myArray)).join(' ')




















