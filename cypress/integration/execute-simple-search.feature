Feature: Search Engine Available

  I need to verify the search engine is up and running

  Scenario: I am visiting a seach engine
    Given I navigate to the search engine web address
    When I look for the term cypressio
    Then the first result is related to cypressio
