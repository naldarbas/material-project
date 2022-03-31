package com.example.materialproject.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.xml.crypto.Data;
import java.util.Date;

@Entity
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    @Column(nullable = false)
    private String monitorDate;
    @Column(nullable = false)
    private String language;
    @Column(nullable = false)
    private String section;
    @Column(nullable = false)
    @Length(max = 100)
    private String url;
    @Column(nullable = false)
    private String author;
    @Length(max = 150)
    @Column(nullable = false)
    private String attachments;
    @Column(nullable = false)
    @Length(max = 50)
    private String title;
    @Column(nullable = false)
    @Length(max = 1000)
    private String content;

    public Material() {
    }

    public Material(Long id, String monitorDate, String language, String section, String url, String author, String attachments, String title, String content) {
        this.id = id;
        this.monitorDate = monitorDate;
        this.language = language;
        this.section = section;
        this.url = url;
        this.author = author;
        this.attachments = attachments;
        this.title = title;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMonitorDate() {
        return monitorDate;
    }

    public void setMonitorDate(String monitorDate) {
        this.monitorDate = monitorDate;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAttachments() {
        return attachments;
    }

    public void setAttachments(String attachments) {
        this.attachments = attachments;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
