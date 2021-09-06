package CS242.SearchEngine;

import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TweetController {
    static List<Tweet> tweets;
    static {
        tweets = new ArrayList<>();
    }

    @GetMapping("/tweets")
    public List<Tweet> searchTweets(
            @RequestParam(required=false, defaultValue="") String query) throws IOException, ParseException {

        if (query.isEmpty())
            return tweets;

        Lucene_Searcher LS  = new Lucene_Searcher();

        return LS.getResults(query);
    }
}
