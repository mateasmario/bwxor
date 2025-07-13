package com.bwxor.backend.service;

import com.bwxor.backend.config.YouTubeConfiguration;
import com.bwxor.backend.exception.ServiceException;
import com.github.kiulian.downloader.YoutubeDownloader;
import com.github.kiulian.downloader.downloader.YoutubeProgressCallback;
import com.github.kiulian.downloader.downloader.client.ClientType;
import com.github.kiulian.downloader.downloader.request.RequestVideoFileDownload;
import com.github.kiulian.downloader.downloader.request.RequestVideoInfo;
import com.github.kiulian.downloader.downloader.request.RequestVideoStreamDownload;
import com.github.kiulian.downloader.downloader.response.Response;
import com.github.kiulian.downloader.model.videos.VideoInfo;
import com.github.kiulian.downloader.model.videos.formats.Format;
import com.github.kiulian.downloader.model.videos.formats.VideoFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

@Service
public class YouTubeService {
    @Autowired
    private YoutubeDownloader downloader;
    private static final String OUTPUT_FOLDER = Path.of("videos").toString();

    public File downloadVideo(String url) throws ServiceException {
        File outputDir = new File(OUTPUT_FOLDER);

        if (!outputDir.exists()) {
            outputDir.mkdir();
        }

        Format format = getVideoFormats(url).get(0);

        RequestVideoFileDownload request = new RequestVideoFileDownload(format)
                .saveTo(outputDir)
                .overwriteIfExists(true);
        Response<File> response = downloader.downloadVideoFile(request);

        return response.data();
    }

    private List<VideoFormat> getVideoFormats(String url) {
        int idStartIndex = url.indexOf("=") + 1;
        int varDelimiterIndex = url.indexOf("&");

        String videoId;
        if (varDelimiterIndex == -1) {
            videoId = url.substring(idStartIndex);
        }
        else {
            videoId = url.substring(idStartIndex, varDelimiterIndex);
        }

        RequestVideoInfo request = new RequestVideoInfo(videoId);
        request.clientType(ClientType.WEB_PARENT_TOOLS);
        Response<VideoInfo> response = downloader.getVideoInfo(request);
        VideoInfo video = response.data();

        List<VideoFormat> videoFormats = video.videoFormats();
        videoFormats.forEach(it -> {
            System.out.println(it.videoQuality() + " : " + it.url());
        });

        return videoFormats;
    }
}
